import { FormControl } from "@chakra-ui/react";

import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { ChatState } from "../../../context/ChatProvider";
import { chatUserSearch, group } from "../../../utils/APIRoutes";
import UserBadgeItem from "../UserAvatar/UserBadgeItem";
import UserListItem from "../UserAvatar/UserListItem";

const GroupChatModal = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const toast = useToast();

  const { user, chats, setChats } = ChatState();
  const handleGroup = (user) => {
    if (selectedUsers.includes(user)) {
      toast({
        title: "User already added",
        description: "User already added to group",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
    setSearch([]);
  };

  const handleSearch = async (query) => {
    setSearch(query);

    if (!query) {
      return;
    }
    try {
      setLoading(true);
      const token = localStorage.getItem("token"); // No need for JSON.parse

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${chatUserSearch}?search=${query}`,
        config
      );

      setSearchResult(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const handleSubmit = async () => {
    if (!groupName || !selectedUsers) {
      toast({
        title: "Error",
        description: "Please fill all the fields properly",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        group,
        {
          groupName: groupName,
          users: selectedUsers.map((u) => u._id), // ✅ clean and correct
        },
        config
      );
      console.log("Selected Users:", selectedUsers);

      console.log("Response Data:", response.data); // Debug response

      setChats([response.data, ...chats]);
      onClose();
      setSearchResult([]);
      setSelectedUsers([]);

      toast({
        title: "Success",
        description: "Group created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (e) {
      console.error("Full Error Response:", e.response);
      console.error("Error Status:", e.response?.status);
      console.error("Error Data:", e.response?.data);
      console.error("Error Message:", e.message);

      toast({
        title: "Error",
        description: e.response?.data?.message || e.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  const handleDelete = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u._id !== user._id));
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="30px"
            fontFamily="'Poppins', sans-serif"
            display="flex"
            justifyContent="center"
          >
            Create Group Chat
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <FormControl>
              <Input
                placeholder="Chat Name"
                mb={3}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add Users eg: Avinav, saug...."
                mb={3}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>
            <Box w="100%" display="flex" flexWrap="wrap">
              {selectedUsers.map((u) => {
                return (
                  <UserBadgeItem
                    key={u._id}
                    user={u}
                    handleFunction={() => handleDelete(u)}
                  />
                );
              })}
            </Box>
            {loading ? (
              <Spinner />
            ) : (
              searchResult?.slice(0, 4).map((user) => {
                return (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => {
                      handleGroup(user);
                    }}
                  />
                );
              })
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Create Chat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupChatModal;
