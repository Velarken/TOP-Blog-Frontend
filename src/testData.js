  export const postData = [
    {
        id:1,
        username: 'Jack',
        updated_at: '3:14pm 02-14-2025',
        post_title: 'Where Are All of the Ladies',
        post_content: 'Hello friends, Jack is looking for his Jill.',
        comments: [
        {
            id: 1,
            content: "Hi Jack, I'm Carol! Message me and lets get to know each other.",
            username: 'Carol',
            updated_at: '1:09am 02-15-2025',
        },
        {
            id: 2,
            content: "Hey Carol, I like your profile photo! Ill get in touch soon!",
            username: 'Jack',
            updated_at: '1:11am 02-15-2025',
        }
        ]
    },
    {
        id:2,
        username: 'Carol',
        updated_at: '10:41am 04-01-2025',
        post_title: "I'm on Top of the World!",
        post_content: "Last night, I met the Prince of Monoco and we had a LOVELY date.",
        comments: [
        {
            id:1,
            content: 'Carol...You cheated on me with a Prince?',
            username: 'Jack',
            updated_at: '12:42pm 04-01-2025'
        }, 
        {
            id:2,
            content: "Sorry for the alarm Jack, it's April Fools Day!",
            username: "Carol",
            updated_at: '4:53pm 04-01-2025'
        }
        ]
    },
    {
        id:3,
        username: 'Dawson',
        updated_at: '2:48pm 09-15-2025',
        post_title: 'Anyone Want to Hang Out?',
        post_content: "Just a bro looking to find other bros to hang out with, heh.",
        comments: [
        {
            id:1,
            content: 'NICE PHOTO...call me',
            username: 'Jack',
            updated_at: '3:32pm 09-16-2026',
        }
        ]
    }
]
export const topicList = [
    {
        topic: 'Animals',
        postCount: 5,
    },
    {
        topic: 'Home Life',
        postCount: 18,
    },
    {
        topic: 'Work Life',
        postCount: 3.
    },
    {
        topic: 'Advice',
        postCount: 22,
    }   
]
export default {
    postData,
    topicList
};