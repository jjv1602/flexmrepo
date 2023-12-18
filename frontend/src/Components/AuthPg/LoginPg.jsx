import React, { useState } from 'react'
import st from './Login.module.css';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { CircularProgress} from '@chakra-ui/react'
import axios from 'axios';
const LoginPg = () => {
  const toast = useToast();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const navigate = useNavigate();
  const [pwd, setP] = useState();
  const [email, setE] = useState();
  const [loading,setLoading]=useState(false);
  const submitHandler = async (par) => {
    setLoading(true);
    par.preventDefault();
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "/api/users/auth",
          { email, pwd },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
  
      } catch (error) {
        console.log(error.message);
        toast({
          title:error.message,
          isClosable: true,
        })
        setLoading(false);
      }
  }
  const regscreen=()=>{
    navigate("/register");
  }
  return (
    <div className={st.par}>
      <Card
        direction={{ base: 'column', lg:'row' }}
        overflow='hidden'
        variant='outline'
        w={{ base: '90vw', lg: '80vw' }}
        className={st.card}
      >
        <div className={st.leftcard}>
          <Heading as='h3' size='lg'>
            FitnessTree
          </Heading>
          
          <Text>Empower Your Fitness Journey</Text>

        </div>

        <Stack >
          <CardBody textAlign='left'  w={{ base: '90vw', lg: '40vw' }}>
            <Heading className={st.text} fontSize='4vh'>Login </Heading>
            <br></br>
            {loading && <CircularProgress isIndeterminate color='green.300' />}

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
