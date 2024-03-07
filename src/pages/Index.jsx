import { Box, Button, Container, Flex, Heading, IconButton, Input, Stack, Text, useToast, VStack, Image } from "@chakra-ui/react";
import { FaPlus, FaFileUpload, FaFolder, FaFileAlt, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Placeholder function for upload logic
  const handleFileUpload = () => {
    toast({
      title: "File uploaded.",
      description: "Your file has been uploaded successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  // Placeholder function for file delete logic
  const handleFileDelete = () => {
    toast({
      title: "File deleted.",
      description: "Your file has been deleted successfully!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={6}>
      <VStack spacing={6}>
        <Heading>My Drive</Heading>
        <Flex w="full">
          <Input placeholder="Search files" mr={2} />
          <IconButton icon={<FaPlus />} colorScheme="blue" />
        </Flex>
        <Flex direction="column" w="full">
          <Stack direction="row" spacing={4} my={4}>
            <Button leftIcon={<FaFileUpload />} colorScheme="teal" variant="solid" onClick={handleFileUpload}>
              Upload Files
            </Button>
            <Button leftIcon={<FaFolder />} colorScheme="yellow" variant="solid">
              New Folder
            </Button>
          </Stack>
          <Box borderWidth="1px" borderRadius="lg" p={4} w="full">
            {/* This is a placeholder list of files. Replace with your own data structure. */}
            <VStack spacing={3} align="stretch">
              <FileItem name="Document 1" type="File" onDelete={handleFileDelete} />
              <FileItem name="Document 2" type="File" onDelete={handleFileDelete} />
              <FileItem name="Folder 1" type="Folder" onDelete={handleFileDelete} />
            </VStack>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

// FileItem component represents a single file or folder in the list
const FileItem = ({ name, type, onDelete }) => (
  <Flex align="center" justify="space-between" w="full">
    <Flex align="center">
      <Box mr={2}>{type === "File" ? <FaFileAlt size="1.5em" /> : <FaFolder size="1.5em" />}</Box>
      <Text fontWeight="medium">{name}</Text>
    </Flex>
    <IconButton icon={<FaTrash />} colorScheme="red" variant="ghost" aria-label={`Delete ${name}`} onClick={onDelete} />
  </Flex>
);

export default Index;
