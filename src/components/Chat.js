import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function Chat() {
    return (
        <Container>
            <ChatHeader>
                <ChannelHeading>
                    <ChannelName>
                        <Name>
                            # clever
                        </Name>
                        <StarBorderIcon/>
                    </ChannelName>
                    <DetailsSection>
                        <div>
                            Details
                        </div>
                        <DetailsIcon>
                            <ErrorOutlineIcon/>
                        </DetailsIcon>
                    </DetailsSection>
                </ChannelHeading>
                <ChannelSubheading>
                    Company-wide announcements and work-based matters
                </ChannelSubheading>
            </ChatHeader>
        </Container>
    )
}

export default Chat

const Container = styled.div `

`
const ChatHeader = styled.div `
    height: 64px;
    padding-left: 19px;
    padding-right: 19px;
    padding-top: 10px;
    align-items: center;
    border-bottom: 1px solid #d3d3d3;
`
const ChannelHeading = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ChannelName = styled.div `
    display: flex;
    cursor: pointer;
`
const Name = styled.div `
    font-weight: bolder;
    font-size: 20px;
`
const DetailsSection = styled.div `
    display: flex;
    padding-left: 16px;
    font-size: 16px;
`
const DetailsIcon = styled.div `
    margin-left: 10px;
    cursor: pointer;
    :hover {
        background: #d3d3d3;
    }
`
const ChannelSubheading = styled.div `
    color: #708090;
`