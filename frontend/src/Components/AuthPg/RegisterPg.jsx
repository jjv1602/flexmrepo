
import React, { useState } from 'react'
import st from './Register.module.css';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement ,FormErrorMessage} from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaBirthdayCake } from "react-icons/fa";
import { CircularProgress} from '@chakra-ui/react'
const RegisterPg = () => {
  const [show, setShow] = useState(false);
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [age, setAge] = useState();
  const [email, setE] = useState();
  const [pwd, setPwd] = useState();
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const ageError= age<18 || age>65;
  const handleClick = () => setShow(!show)

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
        "/api/users",
        { fname, lname, email, pwd },
        config
      );
      setLoading(false);
      navigate('/login');
      

    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  const logscreen = () => {
    navigate("/login");
  }
  return (
    <div className={st.par}>
      <Card
        direction={{ base: 'column', lg: 'row' }}
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
          <CardBody textAlign='left' w={{ base: '90vw', lg: '40vw' }}>
            <Heading className={st.text} fontSize='4vh'>Register  </Heading>
            <br></br>
            {loading && <CircularProgress isIndeterminate color='green.300' />}
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                placeholder='Enter First Name'
                onChange={(e) => setFName(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <FaUserAlt />
              </InputRightElement>
            </InputGroup>
            <br></br>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                placeholder='Enter Last Name'
                onChange={(e) => setLName(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <FaUserAlt />
              </InputRightElement>
            </InputGroup>
            <br></br>
            <FormControl>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                placeholder='Enter Age'
                onChange={(e) => setAge(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <FaBirthdayCake />
              </InputRightElement>
            </InputGroup>
            {ageError && <>Age Should be between 18 and 65</>}
            </FormControl>
            <br></br>
            {/* Email  */}
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
            {/* Password */}
            <InputGroup size='md'>

              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={(e) => setPwd(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  <FiEye />
                </Button>
              </InputRightElement>
            </InputGroup>
            <br></br>
            {!ageError && <Button variant='solid' colorScheme='blue' onClick={submitHandler}>
              Submit
            </Button>}
            <Link isExternal ml={'3vw'} textDecoration={'underline'} onClick={logscreen}>
              Existing User ? Login <ExternalLinkIcon mx='2px' />
            </Link>
          </CardBody>
        </Stack>
      </Card>
    </div>
  )
}

export default RegisterPg
