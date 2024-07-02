/**
* In this challenge, you should sort messages by their sentAt property (oldest first) and 
* modify them by adding an "unread" property
* (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
* input. 
*
* @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
* @param messages List of messages, unsorted and without unread property
* @returns Sorted list of messages with the unread information
*/

// ↓ uncomment bellow lines and add your response!

export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {

    const result:MessageWithUnread[] = []
    
    messages.map((message) => {
        const unread = {
            ...message,
            unread: message.sentAt > lastActivityDatetime ? true : false
        }

        result.push(unread)
    })

    result.sort((a,b) => {
        const dateA = new Date(a.sentAt).getTime()
        const dateB = new Date(b.sentAt).getTime()

        return dateA - dateB
    } )

    return result;
}


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}