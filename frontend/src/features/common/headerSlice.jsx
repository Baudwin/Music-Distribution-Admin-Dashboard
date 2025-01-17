import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        pageTitle: "Home",  // current page title state management
        noOfNotifications : 4,  // no of unread notifications
        newNotificationMessage : "",  // message of notification to be shown
        newNotificationStatus : 1,   // to check the notification type -  success/ error/ info
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload.title
        },

    }
})

export const { setPageTitle, removeNotificationMessage, showNotification } = headerSlice.actions

export default headerSlice.reducer