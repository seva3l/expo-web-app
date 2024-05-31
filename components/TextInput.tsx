import {
    TextInput,
    TextInputProps,
    Text,
    View,
    KeyboardTypeOptions,
    ScrollView,
    InputAccessoryView,
    Platform,
    Keyboard,
    Button,
    TouchableOpacity,
  } from 'react-native';
  // import styles from './_styles';
  // import GlobalSettings from '@utils/globalSettings';
  import { useState } from 'react';
  // import Colors from '@constants/Color';
  import React, { useRef } from 'react';
  // import EyeOffSVG from '@assets/icons/EyeOff';
  // import EyeOpenSVG from '@assets/icons/EyeOpen';
  import { ScaledSheet } from 'react-native-size-matters';
  
  interface IbaseTextInput extends Omit<TextInputProps, 'autoCapitalize' | 'keyboardType'> {
    label?: string;
    value?: string;
    placeholder?: string;
    backgroundColor?: string;
    setText?: (e: string) => void;
    narrow?: boolean;
    icon?: string;
    iconPosition?: 'before' | 'after';
    iconColor?: string;
    iconOnPress?: React.Dispatch<string>;
    iconClearText?: boolean;
    editable?: boolean;
    required?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    keyboardType?: KeyboardTypeOptions;
    numeric?: boolean;
    maxLength?: number;
    suggestions?: any;
    handleSelectSuggestion?: any;
    onSelectSuggestion?: any;
    activeSuggestion?: number;
    elementIdSuggestion?: number;
    secureTextEntry?: boolean;
    labelBlur?: string;
    scrollViewRef?: React.RefObject<ScrollView>;
    isFocused?: boolean;
    unit?: string;
  }
  
  export const BrandTextInput = React.memo((props: IbaseTextInput) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
      <View style={{ width: '100%' }}>
        {props.label !== undefined && props.label !== '' && (
          <Text style={[ { marginBottom: 4 }]}>{props.label}</Text>
        )}
        <View
          style={[
            styles.container
          ]}
        >
          <TextInput
            style={[styles.input]}
            autoCapitalize={props.autoCapitalize ? 'sentences' : 'none'}
            placeholder={
              (props.placeholder ? props.placeholder : '') +
              ((props.label === undefined || props.label === '') && props.required ? '*' : ' ')
            }
            onChangeText={props.setText}
            value={props.value}
            editable={props.editable}
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            maxLength={props.maxLength ? props.maxLength : 100000}
            returnKeyType="done"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={props.secureTextEntry}
          />
          {props.unit !== undefined && (
            <Text
              style={[
                {
                  paddingRight: 12,
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: '500',
                },
              ]}
            >
              {props.unit}
            </Text>
          )}
        </View>
      </View>
    );
  });
  
  export const BrandPhoneInput = (props: IbaseTextInput) => {
    return (
      <BrandTextInput
        label={props.label}
        value={props.value}
        setText={props.setText}
        icon="phone"
        iconPosition="before"
        required={props.required}
        editable={props.editable}
        backgroundColor={props.backgroundColor}
        placeholder={props.placeholder}
        keyboardType="numeric"
        numeric
        maxLength={11}
        returnKeyType="done"
      />
    );
  };
  
  export const BrandPasswordInput = (props: IbaseTextInput) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <View style={{ width: '100%' }}>
        {props.label !== undefined && props.label !== '' && (
          <Text style={[ { marginBottom: 4 }]}>{props.label}</Text>
        )}
        <View
          style={[
            styles.container
          ]}
        >
          <TextInput
            style={[styles.input]}
            autoCapitalize={props.autoCapitalize ? 'sentences' : 'none'}
            placeholder={
              (props.placeholder ? props.placeholder : '') +
              ((props.label === undefined || props.label === '') && props.required ? '*' : ' ')
            }
            secureTextEntry={!showPassword}
            onChangeText={props.setText}
            value={props.value}
            editable={props.editable}
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            maxLength={props.maxLength ? props.maxLength : 100000}
            returnKeyType="done"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity
            style={{ paddingRight: 12 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            {/* {showPassword ? (
              <EyeOpenSVG width={20} height={20} />
            ) : (
              <EyeOffSVG width={20} height={20} />
            )} */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export const BrandMessageInput = (props: IbaseTextInput) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const textInputRef = useRef<TextInput>(null);
    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };
  
    const onFocus = () => {
      // if (Platform.OS === 'ios' && props.scrollViewRef?.current && textInputRef.current) {
      //     textInputRef.current.measureLayout(
      //         props.scrollViewRef.current,
      //         (x, y, width, height) => {
      //           // Calculate the position of the TextInput relative to the ScrollView
      //           const scrollToY = y - height; // You might need to adjust this calculation based on your layout
      //           // Scroll the ScrollView to the calculated position
      //           props.scrollViewRef?.current?.scrollTo({ y: scrollToY, animated: true });
      //         },
      //         () => {}
      //       );
      // }
      setIsFocused(true);
    };
  
    return (
      <View>
        {props.label !== undefined && props.label !== '' && (
          <Text style={[ { marginBottom: 4 }]}>{props.label}</Text>
        )}
        <View
          style={[
            styles.container,
          ]}
        >
          <TextInput
            ref={textInputRef}
            style={[styles.input, { padding: 20, height: 68 }]}
            value={props.value}
            onChangeText={props.setText}
            editable={props.editable}
            placeholder={props.placeholder}
            returnKeyType="done"
            inputAccessoryViewID="doneButtonId"
            onFocus={onFocus}
            onBlur={() => setIsFocused(false)}
            multiline
          />
          {Platform.OS === 'ios' && (
            <InputAccessoryView nativeID="doneButtonId">
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  paddingRight: 10,
                  backgroundColor: 'white',
                }}
              >
                <Button title="Done" onPress={dismissKeyboard} />
              </View>
            </InputAccessoryView>
          )}
        </View>
      </View>
    );
  };
  
  export const BrandEmailInput = (props: IbaseTextInput) => (
    <BrandTextInput
      label={props.label}
      value={props.value}
      setText={props.setText}
      icon="envelope"
      iconPosition="before"
      editable={props.editable}
      required={props.required}
      backgroundColor={props.backgroundColor}
      placeholder={props.placeholder}
      returnKeyType="done"
      inputMode="email"
    />
  );
  
  export const BrandNumberInput = (props: IbaseTextInput) => {
    return (
      <BrandTextInput
        label={props.label}
        value={props.value}
        setText={props.setText}
        editable={props.editable}
        required={props.required}
        backgroundColor={props.backgroundColor}
        placeholder={props.placeholder}
        keyboardType="numeric"
        returnKeyType="done"
      />
    );
  };
  

  const styles = ScaledSheet.create({
    container: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 8,
      // backgroundColor: Colors.textLightColor,
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      // paddingHorizontal: 12,
    },
  
    noBorderContainer: {
      borderColor: 'transparent',
    },
  
    input: {
      paddingHorizontal: '5@s',
      paddingVertical: '5@s',
      // color: Colors.textDarkColor,
      fontSize: 16,
      width: '90%',
      flex: 1,
      // height: 40
    },
  
    message: {
      paddingTop: '16@s',
      height: '106@s',
    },
  
    narrowInput: {
      paddingVertical: '16@s',
    },
    scrollViewContainer: {
      left: 0,
      right: 0,
      borderWidth: 1,
      borderRadius: 5,
      maxHeight: '200@s',
      minHeight: '200@s',
      top: -35,
    },
    // icon: {
    //     paddingVertical: 20,
    //     color: props.Colors.greyLight3
    // },
  
    iconBefore: {
      paddingLeft: 16,
    },
  
    iconAfter: {
      paddingRight: 16,
    },
  
    noPaddingLeft: {
      paddingLeft: 0,
    },
  });