import React, { useContext, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import {  View, FormControl, Stack, VStack, HStack, Box, Flex, Text, Alert, Center, IconButton, CloseIcon } from 'native-base'


export default function Display() {

    const [hasil, setHasil] = useState('')
    const [cal, setCal] = useState('')

    const calculator = () =>{
        try {
            setCal(eval(hasil))
        } catch (error) {
            if(error){
                setHasil('')
                setCal('')
                return      
            }
        }
        // if(value == '%'){
        //    return setCal(eval(hasil / value)*(100))
        // }
    }

    const handleTap = (value) =>{
        setHasil(hasil + value)
    }
    const handleOperation = (value) =>{
        let operations = ['DEL', '+', '-', '*', '/']
        if(value == 'AC'){
            setHasil('')
            setCal('')
            return
        }
        if(value == 'DEL'){
           return setHasil(hasil.toString().substring(0,hasil.length-1))
        }
        if (value == '='){
            return calculator()
        }
        if(operations.includes(hasil.toString().split("").pop())) return
        setHasil(hasil + value)
    }



  return <Box w="90%" flex='1'>
      <FormControl>
        <Stack marginTop={'20px'}>
          <FormControl.Label><Text fontSize='2xl' bold color='primary.50'>Hasil</Text></FormControl.Label>
          <Text 
          type={'number'} 
          bg='primary.50' 
          borderRadius={'10px'} 
          height={'100px'} 
          fontSize='3xl' 
          alignItems={'center'}
          style={{paddingLeft: 20}}>{cal}</Text>
        </Stack>
        <Stack marginTop={'20px'}>
          <FormControl.Label><Text fontSize='2xl' bold color='primary.50'>Nilai</Text></FormControl.Label>
          <Text 
          type={'number'} 
          bg='primary.50' 
          borderRadius={'10px'} 
          height={'50px'} 
          fontSize='3xl' 
          alignItems={'center'}
          style={{paddingLeft: 20}}>{hasil}</Text>
        </Stack>
      </FormControl>
        <View>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('AC')}>
                    <Text style={{width: '100%', height: 50}}
                     borderRadius='20px' 
                     bold bg='danger.800' 
                     color='primary.50' 
                     fontSize='3xl' 
                     textAlign='center'>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('DEL')}>
                    <Text style={{width: '100%', height: 50}}
                     borderRadius='20px' 
                     bold bg='danger.800' 
                     color='primary.50' 
                     fontSize='3xl' 
                     textAlign='center'>DEL</Text>
                </TouchableOpacity>
            <Flex direction='row' justifyContent='center' style={{ marginTop: 10}}>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(1)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 7.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(2)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 8.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('-')}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 1 (2).png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('+')}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 2 (1).png')}/>
                </TouchableOpacity>
            </Flex>
            <Flex direction='row' justifyContent='center' style={{ marginTop: 10}}>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(3)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 9.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(4)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 10.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('/')}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 4 (1).png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('*')}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 3 (1).png')}/>
                </TouchableOpacity>
            </Flex>
            <Flex direction='row' justifyContent='center' style={{ marginTop: 10}}>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(5)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 11.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(6)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 12.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('%')}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 5 (1).png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleOperation('=')}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 6.png')}/>
                </TouchableOpacity>
            </Flex>
            <Flex direction='row' justifyContent='center' style={{ marginTop: 10}}>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(7)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 13.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(8)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 14.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(9)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 15.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: '10px'}} onPress={()=>handleTap(0)}>
                    <Image style={{width: 70, height: 70}} source={require('../assets/Group 16.png')}/>
                </TouchableOpacity>
            </Flex>
        </View>
    </Box>
}
