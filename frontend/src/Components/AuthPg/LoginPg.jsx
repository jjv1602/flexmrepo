import React, { useState } from 'react'
import st from './Login.module.css';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import axios from 'axios';
const LoginPg = () => {
  const toast = useToast();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const navigate = useNavigate();
  const [password, setP] = useState();
  const [email, setE] = useState();
  const submitHandler = async (par) => {
    par.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/design");

    } catch (error) {
      console.log(error);
      toast({
        title: `Incorrect Password`,
        isClosable: true,
      })
    }
  }
  const regscreen=()=>{
    navigate("/register");
  }
  return (
    <div className={st.par}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w='80vw'
        h='50vh'
        className={st.card}
      >
        <div className={st.leftcard}>
          <Heading as='h3' size='lg'>
            LinkTree
          </Heading>

          <Text>Grow Your Business with Us </Text>
          <Text> Directly design the UI of your domain </Text>

        </div>

        <Stack >
          <CardBody textAlign='left' w='40vw'>
            <Heading className={st.text} fontSize='4vh'>Login </Heading>
            <br></br>
            <InputGroup size='md'>

              <Input
                pr='4.5rem'
                type='email'
                placeholder='Enter Email'
                onChange={(e) => setE(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <FaUserAlt />
              </InputRightElement>
            </InputGroup>
            <br></br>
            <InputGroup size='md'>

              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={(e) => setP(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  <FiEye />
                </Button>
              </InputRightElement>
            </InputGroup>
            <br></br>
            <Button variant='solid' colorScheme='blue' onClick={submitHandler}>
              Submit
            </Button>

            <Link  isExternal ml={'3vw'} textDecoration={'underline'} onClick={regscreen}>
              New User ? Register <ExternalLinkIcon mx='2px' />
            </Link>
          </CardBody>
        </Stack>
      </Card>
    </div>
  )
}

export default LoginPg
