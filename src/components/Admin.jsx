import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope, FaEnvelopeOpen, FaReply, FaTrash } from 'react-icons/fa';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/contact');
      if (response.data.success) {
        setMessages(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/contact/${id}/status`, { status });
      fetchMessages();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`http://localhost:5000/api/contact/${id}`);
        fetchMessages();
      } catch (error) {
        console.error('Failed to delete message:', error);
      }
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'all') return true;
    return msg.status === filter;
  });

  const stats = {
    total: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    read: messages.filter(m => m.status === 'read').length,
    replied: messages.filter(m => m.status === 'replied').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          Admin <span className="gradient-text">Dashboard</span>
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-6 text-center cursor-pointer"
            onClick={() => setFilter('all')}
          >
            <div className="text-3xl font-bold gradient-text">{stats.total}</div>
            <div className="text-gray-400 mt-2">Total Messages</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-6 text-center cursor-pointer"
            onClick={() => setFilter('unread')}
          >
            <div className="text-3xl font-bold text-yellow-500">{stats.unread}</div>
            <div className="text-gray-400 mt-2">Unread</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-6 text-center cursor-pointer"
            onClick={() => setFilter('read')}
          >
            <div className="text-3xl font-bold text-blue-500">{stats.read}</div>
            <div className="text-gray-400 mt-2">Read</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-6 text-center cursor-pointer"
            onClick={() => setFilter('replied')}
          >
            <div className="text-3xl font-bold text-green-500">{stats.replied}</div>
            <div className="text-gray-400 mt-2">Replied</div>
          </motion.div>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <div className="glass rounded-xl p-8 text-center text-gray-400">
              No messages found
            </div>
          ) : (
            filteredMessages.map((message) => (
              <motion.div
                key={message._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {message.status === 'unread' ? (
                      <FaEnvelope className="text-yellow-500 text-xl" />
                    ) : (
                      <FaEnvelopeOpen className="text-blue-500 text-xl" />
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{message.name}</h3>
                      <p className="text-gray-400 text-sm">{message.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      message.status === 'unread' ? 'bg-yellow-500/20 text-yellow-500' :
                      message.status === 'read' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {message.status}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold mb-2">{message.subject}</h4>
                <p className="text-gray-300 mb-4">{message.message}</p>

                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  {message.status === 'unread' && (
                    <button
                      onClick={() => updateStatus(message._id, 'read')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-500 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      <FaEnvelopeOpen /> Mark as Read
                    </button>
                  )}
                  
                  {message.status !== 'replied' && (
                    <button
                      onClick={() => updateStatus(message._id, 'replied')}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors"
                    >
                      <FaReply /> Mark as Replied
                    </button>
                  )}
                  
                  <button
                    onClick={() => deleteMessage(message._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors ml-auto"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
