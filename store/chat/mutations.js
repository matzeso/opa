import Vue from 'vue';
import * as types from './mutation-types';

const mutations = {
  // Chatbox Global States
  [types.UPDATE_CHATBOX_EMOJI](state, { chatboxEmoji }) {
    state.chatboxEmoji = chatboxEmoji;
  },
  [types.UPDATE_LAST_NOTIFICATION](state, { lastNotification }) {
    state.lastNotification = lastNotification;
  },
  [types.UPDATE_CHAT_CONFIG](state, { chatConfig }) {
    state.chatConfig = chatConfig;
  },
  [types.UPDATE_NUM_UNREAD_CONVERSATION](state, { numUnreadConversation }) {
    state.numUnreadConversation = numUnreadConversation;
  },
  [types.UPDATE_LAST_MESSAGE_SENT_STAMP](state, { lastMessageSentStamp }) {
    state.lastMessageSentStamp = lastMessageSentStamp;
  },
  [types.UPDATE_IS_PRESENCE_AWAY](state, { isPresenceAway }) {
    state.isPresenceAway = isPresenceAway;
  },
  [types.UPDATE_LAST_PRESENCE](state, { lastPresence }) {
    state.lastPresence = lastPresence;
  },

  // Conversation List
  [types.ADD_CONVERSATION_TO_LIST](state, { conversation }) {
    state.conversationList.push(conversation);
  },
  [types.UPDATE_CONVERSATION_LIST](state, { conversationList }) {
    state.conversationList = conversationList;
  },
  [types.REMOVE_CONVERSATION_FROM_LIST](state, { conversation }) {
    state.conversationList = state.conversationList.filter(conv => 
      conv.contact.username !== conversation.contact.username);
  },
  [types.REORDER_CONVERSATIONS_BY_CONVERSATION](state, { conversation }) {
    const reorderedConversations = state.conversationList.filter(conv => 
      conv.contact.username !== conversation.contact.username);
    reorderedConversations.unshift(conversation);
    state.conversationList = reorderedConversations;
  },

  // Conversation
  [types.ADD_MESSAGE_TO_CONVERSATION](state, { messageList, messageToAdd }) {
    messageList.push(messageToAdd);
  },
  [types.CLEAR_UNREAD_COUNTER_CONVERSATION](state, { conversation }) {
    Vue.set(conversation, 'numUnreadMsgs', 0);
  },
  [types.PLUS_UNREAD_COUNTER_CONVERSATION](state, { conversation }) {
    Vue.set(conversation, 'numUnreadMsgs', conversation.numUnreadMsgs + 1);
  },
  [types.SET_CHATBOX_STATE_CONVERSATION](state, { conversation, chatboxState }) {
    Vue.set(conversation, 'chatboxState', chatboxState);
  },
  [types.UPDATE_ACTIVE_CONVERSATION](state, { activeConversation }) {
    state.activeConversation = activeConversation;
  },
  [types.UPDATE_ACTIVE_CONVERSATION_IS_TYPING](state, { isTyping }) {
    state.activeConversation.isTyping = isTyping;
  },

  // Old Conversation
  [types.UPDATE_OLD_CONVERSATION](state, { conversation, oldConversation }) {
    Vue.set(conversation, 'oldConversation', oldConversation);
  },
  [types.UPDATE_OLD_CONVERSATION_LAST_STAMP](state, { oldConversation, lastStamp }) {
    Vue.set(oldConversation, 'lastStamp', lastStamp);
  },
  [types.UPDATE_OLD_CONVERSATION_IS_LOADING](state, { oldConversation, bool }) {
    Vue.set(oldConversation, 'isLoading', bool);
  },
  [types.UPDATE_OLD_CONVERSATION_NO_RESULT](state, { oldConversation, bool }) {
    Vue.set(oldConversation, 'noResult', bool);
  },
  [types.UPDATE_OLD_CONVERSATION_LAST_RETRIEVED_ID](state, { oldConversation, lastRetrievedId }) {
    Vue.set(oldConversation, 'lastRetrievedId', lastRetrievedId);
  },
  [types.UPDATE_OLD_CONVERSATION_LAST_MESSAGE_ID](state, { oldConversation, lastMessageId }) {
    Vue.set(oldConversation, 'lastMessageId', lastMessageId);
  },
  [types.ADD_MESSAGE_LIST_TO_OLD_CONVERSATION](state, { oldConversation, messageList }) {
    oldConversation.list = messageList.concat(oldConversation.list);
  },
};

export default mutations;
