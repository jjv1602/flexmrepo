import React from 'react'
import Navbar from '../Navbar/Navbar'
import st from './profile.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import HeaderImage from "../../assets/trainerbg/header_bg_5.jpg";
import {
  Editable,
  EditableInput,
  EditablePreview, Stack, Text
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, useDisclosure, Heading, useEditableControls, Flex, IconButton, ButtonGroup, useToast, Box, FormHelperText, StackDivider } from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
const ProfilePg = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <IconButton size='md' icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    )
  }
  return (
    <div>
      <Navbar></Navbar>
      <SectionHeader image={HeaderImage} title="Profile Page" color="white">Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam,
        architecto nostrum nobis, est, deserunt odio illum perspiciatis
      </SectionHeader>

      <div className={st.parent}>
        <Box className={st.bx}>
          <FormLabel color='gray.400' >Enter Email </FormLabel>
          <Editable
            textAlign='center'
            defaultValue='Rasengan ⚡️'
            fontSize='2xl'
            isPreviewFocusable={false}
            isDisabled='true'
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
          </Editable>
          <FormLabel color='gray.400' >Enter First Name</FormLabel>
          <Editable
            textAlign='center'
            defaultValue='Rasengan ⚡️'
            fontSize='2xl'
            isPreviewFocusable={false}
            display={'flex'}
            gap={'2rem'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
            <Input as={EditableInput} border='5px' borderColor={"white"} color={'white'} w={"100%"} />
            <EditableControls border='5px' borderColor={"#ffb116"} />
          </Editable>
          <FormLabel color='gray.400' >Enter First Name</FormLabel>
          <Editable
            textAlign='center'
            defaultValue='Rasengan ⚡️'
            fontSize='2xl'
            isPreviewFocusable={false}
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
            <Input as={EditableInput} border='5px' borderColor={"white"} color={'white'} w={"100%"} />
            <EditableControls border='5px' borderColor={"#ffb116"} />
          </Editable>
          <FormLabel color='gray.400' >Enter First Name</FormLabel>
          <Editable
            textAlign='center'
            defaultValue='Rasengan ⚡️'
            fontSize='2xl'
            isPreviewFocusable={false}
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
            <Input as={EditableInput} border='5px' borderColor={"white"} color={'white'} w={"100%"} />
            <EditableControls border='5px' borderColor={"#ffb116"} />
          </Editable>

          {/* Batch Data  */}
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor='var(--color-gray-500)'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody color={'white'}>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box color={'white'}>
                    <Heading size='xs' textTransform='uppercase'>
                      Batch Details
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Overview
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Analysis
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>

              <CardFooter display={'flex'} flexDirection={'column'}>
                <button className={st.btn2}>Batch Change Request </button>
                <Text color={'white'}>Batch change can only occur at end of the month </Text>
              </CardFooter>
            </Stack>
          </Card>
          <button className={st.btn}>Update Details and Save </button>
        </Box>
      </div>
    </div>
  )
}

export default ProfilePg
