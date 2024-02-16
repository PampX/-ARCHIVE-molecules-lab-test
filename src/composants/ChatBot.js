import React, { useState, useEffect, useRef } from 'react';
import '../utils/css/chatBot.css'
import iconSend from '../images/general/send.png'

const ChatBot = ({ onNewMessage }) => {

  const [inputMessage, setInputMessage] = useState('');
  const [historicalMessage, setHistoricalMessage] = useState(() => {
    const savedMessages = localStorage.getItem('historicalMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const current = messagesEndRef.current;
    if (current) {
      current.scrollTop = current.scrollHeight;
    }
  }, [historicalMessage]);

  useEffect(() => {
    localStorage.setItem('historicalMessages', JSON.stringify(historicalMessage));
  }, [historicalMessage]);

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    const userMessage = { role: 'user', content: inputMessage };

    setHistoricalMessage(historicalMessage => [...historicalMessage, userMessage]);

    setInputMessage('');
    setIsAwaitingResponse(true);

    try {
      const response = await sendApiRequest(userMessage);
      console.log(response);
      if (response && response.text) {
        const newMessageAssistant = { role: 'assistant', content: response.text };
        setHistoricalMessage(historicalMessage => [...historicalMessage, newMessageAssistant]);
      }
    } catch (error) {
      console.error("Erreur lors de l'appel API:", error);
    } finally {
      setIsAwaitingResponse(false);
    }
  };

  const sendApiRequest = async (message) => {
    const dataApi = {
      "messages": [
        message
      ],
      "chatbotId": "r51oWs1xwa29GbxN9a8tZ",
      "stream": false,
      "model": "gpt-3.5-turbo",
      "conversationId": 1
    };

    try {
      const response = await fetch('https://www.chatbase.co/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer a54f75d2-a843-4d9d-837f-6d65815ed23c'
        },
        body: JSON.stringify(dataApi)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      onNewMessage();
      return data
    } catch (error) {
      console.error("Erreur lors de l'appel API:", error);
    }
  };

  return (
    <div className="chatbot">
      <div className='container-messages' ref={messagesEndRef}>
      <p className='text-chatbot-intro'>🌟 Bienvenue ! Laissez-moi vous aider à trouver le produit idéal pour vos besoins. Partagez votre problématique, et ensemble découvrons le produit qui vous convient le mieux ! 💡</p>
        {historicalMessage.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
        {isAwaitingResponse && <div className="waiting-message">L'IA est en train de vous répondre...</div>}
      </div>
      <div className='container-input'>
        <div className='container-input-img'>
          <input
            className='input-chat-box'
            value={inputMessage}
            placeholder='Messages...'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <img onClick={sendMessage} className='icon-send' src={iconSend} />
        </div>
        <p className='text-mention-chat-box'>Powered By PharmaNature</p>
      </div>
    </div>
  );
};

export default ChatBot;