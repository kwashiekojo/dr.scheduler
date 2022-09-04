import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

//formik
import { Formik } from "formik";

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
} from './../components/styles';

//colors
const {brand, darkLight, primary}= Colors;

const Welcome = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.jpg')}/> 
                <PageTitle>Dr. Scheduler</PageTitle>
                <SubTitle>Welcome</SubTitle>

                

                <Formik
                    initialValues={{email: '', password:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        

                        
                        

                       

                        

                        
                    </StyledFormArea>
                )

                }

                </Formik>
            </InnerContainer>

        </StyledContainer>

    );

};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword (!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Welcome;