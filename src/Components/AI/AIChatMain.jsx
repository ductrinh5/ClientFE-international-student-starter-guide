import React, { useState } from "react";

function AIChatMain() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI travel assistant. How can I help you plan your next adventure today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: generateAIResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput) => {
    const responses = [
      "That's a great question! Let me help you with that.",
      "I'd be happy to assist you with travel planning.",
      "Based on your request, I can recommend some amazing destinations.",
      "That sounds like an exciting adventure! Here's what I suggest.",
      "I have some excellent recommendations for you.",
      "Let me provide you with some travel insights.",
      "That's a wonderful idea! Here are some options to consider.",
      "I can help you find the perfect travel experience.",
      "Based on your preferences, I have some suggestions.",
      "Let me guide you through some amazing travel possibilities."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <section className="th-ai-chat-wrapper space-top space-extra-bottom">
      <div className="container shape-mockup-wrap">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="ai-chat-container">
              <div className="chat-header">
                <h2 className="chat-title">AI  Assistant</h2>
                <p className="chat-subtitle">
                  Get personalized places recommendations, plan your itinerary, and discover amazing destinations with our AI-powered assistant.
                </p>
              </div>

              <div className="chat-messages">
                {messages.map((message) => (
                  <div key={message.id} className={`message ${message.type}`}>
                    <div className="message-content">
                      <div className="message-text">{message.content}</div>
                      <div className="message-time">{message.timestamp}</div>
                    </div>
                    <div className="message-avatar">
                      {message.type === "ai" ? (
                        <i className="fa-solid fa-robot"></i>
                      ) : (
                        <i className="fa-regular fa-user"></i>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="message ai typing">
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="message-avatar">
                      <i className="fa-solid fa-robot"></i>
                    </div>
                  </div>
                )}
              </div>

              <div className="chat-input">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ask me about travel destinations, itineraries, or travel tips..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>

              <div className="chat-suggestions">
                <h6>Quick Questions:</h6>
                <div className="suggestion-chips">
                  {[
                    "Best time to visit Europe?",
                    "Budget travel tips",
                    "Family-friendly destinations",
                    "Adventure travel ideas"
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      className="suggestion-chip"
                      onClick={() => setInputMessage(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIChatMain;
