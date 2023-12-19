import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import st from './profile.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import HeaderImage from "../../assets/trainerbg/header_bg_5.jpg";
import {
  Editable,
  EditableInput,
  EditablePreview, Stack, Text, CircularProgress
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, useDisclosure, Heading, useEditableControls, Flex, IconButton, ButtonGroup, useToast, Box, FormHelperText, StackDivider } from '@chakra-ui/react'
import axios from 'axios';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
const ProfilePg = () => {
  const navigate = useNavigate();
  const [fname, setF] = useState(JSON.parse(localStorage.getItem('userInfo')).fname);
  const [lname, setL] = useState(JSON.parse(localStorage.getItem('userInfo')).lname);
  const [age, setAge] = useState(JSON.parse(localStorage.getItem('userInfo')).age);
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem('userInfo')).email);
  const [batch, setBatch] = useState([]);
  const [loading, setLoading] = useState();
  const toast = useToast();
  function getLastDateOfMonth(year, month) {
    // Create a date object for the next month's first day
    const nextMonthFirstDay = new Date(year, month + 1, 1);

    // Subtract one day to get the last day of the current month
    const lastDayOfMonth = new Date(nextMonthFirstDay - 1);

    return lastDayOfMonth.getDate();
  }
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
  const updateDetails = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        "/api/users/update",
        { email, fname, lname, age },

        config
      );
      const oldlocalstorage = JSON.parse(localStorage.getItem('userInfo'));
      const updatedinfo = { ...oldlocalstorage, email: email, fname: fname, lname: lname, age: age };
      localStorage.setItem('userInfo', JSON.stringify(updatedinfo));
      setLoading(false);
      toast({
        title: "Updated Successfully",
        isClosable: true,
      })
    } catch (error) {
      console.log(error.message);
      toast({
        title: error.message,
        isClosable: true,
      })
      setLoading(false);
    }
  }

  const changeRequest = async () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    if (currentDay != 30 || currentDay != 31) {
      const lastDateOfMonth = getLastDateOfMonth(currentYear, currentMonth);
      toast({
        title: "Request not approved",
        description: `You can only change during end of the month i.e on ${lastDateOfMonth} / ${currentMonth} / ${currentYear}`,
        status: "error",
        isClosable: true,
      })
    } else {
      try {
        const id = JSON.parse(localStorage.getItem('userInfo')).id;
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.delete(
          "/api/booking/id",
          config
        );
        toast({
          title: "Success",
          description: "Your Request is Successful You can now change the batch",
          status: "success",
          isClosable: true,
          duration: 5000
        })
        navigate("/plans");
      } catch (e) {
        toast({
          title: "Failed",
          description: e.message,
          status: "error",
          isClosable: true,
          duration: 5000
        })
      }
    }
  }

  useEffect(() => {
    if(!localStorage.getItem('userInfo')){
      navigate("/login");
    };
    const fetchbatch = async () => {
      const bt = localStorage.getItem('batches');
      
      if (bt == 1) {
        try {
          const id = JSON.parse(localStorage.getItem('userInfo')).id;
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          const { data } = await axios.get(
            "/api/booking/id",
            config
          );

          setBatch(data[0]);

        } catch (e) {
          toast({
            title: "Failed",
            description: e.message,
            status: "error",
            isClosable: true,
            duration: 5000
          })
        }
      }
    }
    fetchbatch();
  }, [])

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
            defaultValue={email}
            fontSize='md'
            isPreviewFocusable={false}
            isDisabled='true'
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
          </Editable>
          <Text color={'white'}>⚠ Email cannot be changed 🙇‍♀️</Text>
          <FormLabel color='gray.400' >Enter First Name</FormLabel>
          <Editable
            textAlign='center'
            defaultValue={fname}
            fontSize='md'
            isPreviewFocusable={false}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
            <Input as={EditableInput} border='5px' borderColor={"white"} color={'white'} w={"100%"} onChange={(e) => setF(e.target.value)} />
            <EditableControls border='5px' borderColor={"#ffb116"} />
          </Editable>
          <FormLabel color='gray.400' >Enter Last Name</FormLabel>
          <Editable
            textAlign='center'
            defaultValue={lname}
            fontSize='md'
            isPreviewFocusable={false}
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />

            <Input as={EditableInput} border='5px' borderColor={"white"} color={'white'} w={"100%"} onChange={(e) => setL(e.target.value)} />
            <EditableControls border='5px' borderColor={"#ffb116"} />
          </Editable>
          <FormLabel color='gray.400' >Enter Age</FormLabel>
          <Editable
            textAlign='center'
            defaultValue={age}
            fontSize='md'
            isPreviewFocusable={false}
          >
            <EditablePreview border='solid 2px' borderColor={"white"} borderRadius={"1rem"} color={'white'} w={"100%"} />
            {/* Here is the custom input */}
            <Input as={EditableInput} border='5px' borderColor={"white"} color={'white'} w={"100%"} onChange={(e) => setAge(e.target.value)} />
            <EditableControls border='5px' borderColor={"#ffb116"} />
          </Editable>

          {/* Batch Data  */}
          {batch.length!==0 && <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor='var(--color-gray-500)'
            marginTop='12vh'
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
                      {batch.batchname}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Payment Status :
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {batch.payment_done && <Text>Done Successfully</Text>}
                      {!batch.payment_done && <Text>Not Done Till Now</Text>}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Batch Timings
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {batch.starttime} - {batch.endtime}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>

              <CardFooter display={'flex'} flexDirection={'column'}>
                <button className={st.btn2} onClick={changeRequest}>Batch Change Request </button>
                <Text color={'white'}>Batch change can only occur at end of the month </Text>
              </CardFooter>
            </Stack>
          </Card>}
          {loading && <CircularProgress isIndeterminate color='green.300' />}
          <button className={st.btn} onClick={updateDetails}>Update Details and Save </button>
        </Box>
      </div>
    </div>
  )
}

export default ProfilePg
