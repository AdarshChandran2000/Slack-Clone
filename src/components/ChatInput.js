import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextFieldsIcon from '@material-ui/icons/TextFields';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message Here..."/>
                    <SendButton>
                        <Send/>                        
                    </SendButton>
                </form>
                <Icons>
                    <LeftIcons>
                        <FormatBoldIcon/>
                        <FormatItalicIcon/>
                        <StrikethroughSIcon/>
                        <CodeIcon/>
                        <LinkIcon/>
                        <FormatListNumberedIcon/>
                        <FormatListBulletedIcon/>
                    </LeftIcons>
                    <RightIcons>
                        <TextFieldsIcon/>
                        <AlternateEmailIcon/>
                        <EmojiEmotionsIcon/>
                        <AttachFileIcon/>
                    </RightIcons>
                </Icons>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div `
    border: 4px solid #D9D9D9;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 6px 6px 20px 20px rgba(0, 0, 0, 0.19);
    background: white;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        color: #D9D9D9;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
        
    }
`

const SendButton = styled.div `
    background:  #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }
    :hover {
        background: #148567;
    }
`
const Send = styled(SendIcon) `
    color: #D9D9D9;
`
const Icons = styled.div `
    display: flex;
    justify-content: space-between;
    color: #C9C9C9;
`
const LeftIcons = styled.div `
    :hover
    {
        color: grey;
    }
`
const RightIcons = styled.div `
    :hover
    {
        color: grey;
    }
`
