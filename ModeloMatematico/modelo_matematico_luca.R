## Data
library(reshape2)
library(knitr)
library(dplyr)
data("data")
#kable(head(iris, n = 3)) 

## Exploracion Grafica
library(ggplot2)
library(gridExtra)
plot1 <- ggplot(data = datos, aes(x = variable_1)) +
  geom_density(aes(colour = Species)) +
  theme_bw()
plot2 <- ggplot(data = datos, aes(x = variable_2)) +
  geom_density(aes(colour = Species)) +
  theme_bw()
plot3 <- ggplot(data = datos, aes(x = variable_3)) +
  geom_density(aes(colour = Species)) +
  theme_bw()
plot4 <- ggplot(data = datos, aes(x = variable_4)) +
  geom_density(aes(colour = Species)) +
  theme_bw()
grid.arrange(plot1, plot2, plot3, plot4)
pairs(x = datos[, -5], col = c("firebrick", "green3", "blue")[datos$especies], pch = 20)

# representación mediante histograma de cada variable para cada especie
par(mfcol = c(3, 4))
for (k in 1:4) {
  j0 <- names(iris)[k]
  x0 <- seq(min(iris[, k]), max(iris[, k]), le = 50)
  for (i in 1:3) {
    i0 <- levels(iris$Species)[i]
    x <- iris[iris$Species == i0, j0]
    hist(x, proba = T, col = grey(0.8), main = paste("especie", i0), xlab = j0)
    lines(x0, dnorm(x0, mean(x), sd(x)), col = "red", lwd = 2)
  } }

# representación de cuantiles normales de cada variable para cada especie
for (k in 1:4) {
  j0 <- names(iris)[k]
  x0 <- seq(min(iris[, k]), max(iris[, k]), le = 50)
  for (i in 1:3) {
    i0 <- levels(iris$Species)[i]
    x <- iris[iris$Species == i0, j0]
    qqnorm(x, main = paste(i0, j0), pch = 19, col = i + 1)
    qqline(x)
  } }

# Contraste de normalidad Shapiro-Wilk para cada variable en cada especie
datos_tidy <- melt(iris, value.name = "valor") 
kable(datos_tidy %>% group_by(Species, variable) %>% summarise(p_value_Shapiro.test = round(shapiro.test(valor)$p.value, 5)))

library(MVN)
outliers <- mvOutlier(iris[,-5], qqplot = TRUE, method = "quan")
roystonTest(data = iris[,-5], qqplot = TRUE)
hzTest(data = iris[,-5], qqplot = FALSE)
library(biotools)
boxM(data = iris[, -5], grouping = iris[, 5])

## Calculo de la funcion discriminante
library(MASS)
modelo_lda <- lda(Species ~ Sepal.Width + Sepal.Length + Petal.Length +
                    Petal.Width, data = iris)
modelo_lda

## Evaluacion de los errores de clasificacion
predicciones <- predict(object = modelo_lda, newdata = iris[, -5])
table(iris$Species, predicciones$class, dnn = c("Clase real", "Clase predicha"))
trainig_error <- mean(iris$Species != predicciones$class) * 100
paste("trainig_error =", trainig_error, "%")

## Visualizacion de las clasificaciones
library(klaR)
partimat(Species ~ Sepal.Width + Sepal.Length + Petal.Length + Petal.Width,
         data = iris, method = "lda", prec = 200,image.colors = c("darkgoldenrod1", "snow2", "skyblue2"), col.mean = "firebrick")