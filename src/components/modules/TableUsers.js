import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/global-context";
// services
import {
  getUsersRequest,
  deleteUserRequest,
} from "../../services/userServices.js";

// material
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

const TableUsers = () => {
  const [users, setUsers] = useState();
  const { ui } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        ui.setLoader({
          text: "Cargando usuarios",
          visible: true,
        });
        const { data } = await getUsersRequest();
        setUsers(data);
      } catch (error) {
        console.error(error);
        ui.setDialog({
          title: "error",
          body: `Error al cargar usuarios,${error}`,
          btnText: "ok",
          open: true,
        });
      } finally {
        ui.setLoader({ text: "", visible: false });
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      const { data } = await getUsersRequest();
      setUsers(data);
    };

    loadUsers();
  }, [users]);

  const handleEditClick = async (userId) => {
    navigate(`/FormsUsers/${userId}`);
  };

  const handleDeleteClick = async (userId) => {
    console.log(userId);
    try {
      const response = await deleteUserRequest(userId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((unUsers) => (
              <TableRow key={unUsers.user_id}>
                <TableCell>{unUsers.user_name}</TableCell>
                <TableCell>{unUsers.user_id}</TableCell>
                <TableCell>{unUsers.email}</TableCell>
                <TableCell>{unUsers.created_At}</TableCell>
                <TableCell>
                  {/* Botón de Editar */}
                  <IconButton
                    color="primary"
                    onClick={() => handleEditClick(unUsers.user_id)}
                  >
                    <EditIcon />
                  </IconButton>
                  {/* Botón de Eliminar */}
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteClick(unUsers.user_id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUsers;
