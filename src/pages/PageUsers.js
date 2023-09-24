import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// services
import {
  getUsersRequest,
  deleteUserRequest,
} from "../services/userServices.js";

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

// components
import Sidebar from "../ui/sideBar/SideBar";

const PageUsers = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      const { data } = await getUsersRequest();
      console.log(data);
      setUsers(data);
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
      <Sidebar />
      <h1 className="text-center">User Page</h1>
      <div className="ml-[5%] p-[2%]">
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
    </div>
  );
};

export default PageUsers;
