import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import bg from '../assets/background.jpg'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # clever
                    </ChannelName>
                    <ChannelInfo>
                        Company wide announcements snd work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                </ChannelDetails>
            </Header>
            <Background>
                <MessageContainer>
                    <ChatMessage/>
                </MessageContainer>
                <ChatInput/>
            </Background>
        </Container>
    )
}

export default Chat;

const Container = styled.div `
    display: grid;
    grid-template-rows: 64px auto;
`
const Channel = styled.div `

`
const ChannelName = styled.div `
    font-weight: 700;
`
const ChannelInfo = styled.div `
    font-weight: 400;
    color: #606060;
    font-szie: 13px;
    margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon) `
    margin-left: 10px;
`

const ChannelDetails = styled.div `
    display: flex;
    align-items: center;
    color: #606060;
    
`

const Header = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83,.13);
    justify-content: space-between;
`
const MessageContainer = styled.div `
`
const Background = styled.div `
    background-image: url(${bg});
    display: grid;
    grid-template-rows: auto min-content;
`
