import Layout from "../components/layouts";
import {
  HeadingTitle,
  Paper,
  Title,
} from "../components/modules/ui";
import rightContent from "../assets/rightContent.png";
import ContactInfo from "../components/modules/views/accountantForms/ContactInfo";
import CommercialAddress from "../components/modules/views/accountantForms/CommercialAddress";
import Documents from "../components/modules/views/accountantForms/Documents";
import PaymentRegistry from "../components/modules/views/accountantForms/PaymentRegistry";

const Accountant = () => {
  return (
    <Layout>
      <Title>Mi Contador</Title>
      <Paper>
        <HeadingTitle
          title="Mi contador"
          rightContent={
            <img src={rightContent} className="h-12" alt="right content" />
          }
        />
        <ContactInfo />
        <CommercialAddress />
        <Documents />
        <PaymentRegistry />
      </Paper>
    </Layout>
  );
};

export default Accountant;
