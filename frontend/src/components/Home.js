/*
import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="body__main">
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
            alt=""
          />
          <i className="material-icons sidebar__topAvatar">account_circle</i>
          <h2>Shanmugasundaram</h2>
          <h4>shanmu8050@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who Viewed You</p>
            <p className="sidebar__statNumber">2,453</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,650</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>Selling</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>Buying</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>Events</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>Trading</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>Funding</p>
          </div>
        </div>
      </div>

      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <i className="material-icons">create</i>
            <form>
              <input type="text" placeholder="Add Post" />
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{ color: '#70b5f9' }} className="material-icons">
                insert_photo
              </i>
              <h4>Photo</h4>
            </div>
            <div className="inputOption">
              <i style={{ color: '#e7a33e' }} className="material-icons">
                subscriptions
              </i>
              <h4>Video</h4>
            </div>
            <div className="inputOption">
              <i style={{ color: '#c0cbcd' }} className="material-icons">
                event_note
              </i>
              <h4>Event</h4>
            </div>
            <div className="inputOption">
              <i style={{ color: '#7fc15e' }} className="material-icons">
                calendar_view_day
              </i>
              <h4>Write Article</h4>
            </div>
          </div>
        </div>

        {[
          {
            name: 'Sangeetha',
            role: 'Farmer',
            content:
              'Our paddy field is ready for harvest, If you need further details, please dm',
            image: '../assests/photo8.png',
          },
          {
            name: 'Senthil Kumar',
            role: 'Farmer',
            content: '“From a small seed, a mighty trunk may grow.”',
            image: '../assests/photo5.png',
          },
          {
            name: 'Siddharth',
            role: 'Trader',
            content:
              'Cattle for sale at resonable price follow for more updates',
            image: '../assests/photo3.png',
          },
          {
            name: 'Kiruthika',
            role: 'Agronomist',
            content: 'Need a suggestion from meteorologists kindly dm',
            image: '../assests/photo2.png',
          },
          {
            name: 'Suresh Kumar',
            role: 'Greengrocer',
            content: 'Freshly harvested vegtables and fruits for sale',
            image: '../assests/photo4.png',
          },
          {
            name: 'Mahalakshmi',
            role: 'Irrigation officer',
            content:
              'Anyone need help about irrigation sector can contact me',
            image: '../assests/Water irrigation1.jpg',
          },
          {
            name: 'Saravanan',
            role: 'Farmer',
            content: 'Different kind of plants for sale',
            image: '../assests/photo7.png',
          },
        ].map((post, index) => (
          <div className="post" key={index}>
            <div className="post__header">
              <i className="material-icons sidebar__topAvatar">account_circle</i>
              <div className="post__info">
                <h2>{post.name}</h2>
                <p>{post.role}</p>
              </div>
            </div>

            <div className="post__body">
              <p>{post.content}</p>
              <img src={post.image} alt="" />
            </div>

            <div className="feed__inputOptions">
              <div className="inputOption">
                <i style={{ color: 'gray' }} className="material-icons">
                  thumb_up
                </i>
                <h4>Like</h4>
              </div>
              <div className="inputOption">
                <i style={{ color: 'gray' }} className="material-icons">
                  comment
                </i>
                <h4>Comment</h4>
              </div>
              <div className="inputOption">
                <i style={{ color: 'gray' }} className="material-icons">
                  share
                </i>
                <h4>Share</h4>
              </div>
              <div className="inputOption">
                <i style={{ color: 'gray' }} className="material-icons">
                  send
                </i>
                <h4>Send</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="widgets">
        <div className="widgets__header">
          <h2>Latest Update</h2>
          <i className="material-icons">info</i>
        </div>
        {[
          { title: 'Agriculture Funding Bill Delayed', readers: 15000 },
          { title: 'Advancements in AgTech', readers: 3500 },
          { title: 'Market Trends in Organic Farming', readers: 1200 },
          { title: 'Climate Change and Its Effects', readers: 7500 },
          { title: 'Innovations in Irrigation', readers: 5000 },
        ].map((update, index) => (
          <div className="widget__article" key={index}>
            <h4>{update.title}</h4>
            <p>{update.readers} readers</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
*/

/*
import React from 'react';
import './Home.css'; // Ensure the correct path to your CSS file
import { Avatar } from '@mui/material';
import { Search as SearchIcon, AccountCircle, Create, InsertPhoto, Subscriptions, EventNote, CalendarViewDay, ThumbUp, Comment, Share, Send, Info, FiberManualRecord } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar_h">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
          alt=""
        />
        <AccountCircle className="sidebar__topAvatar" />
        <h2>Shanmugasundaram</h2>
        <h4>shanmu8050@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">2,453</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,650</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {['Selling', 'Buying', 'Events', 'Trading', 'Funding'].map((item) => (
          <div className="sidebar__recentItem" key={item}>
            <span className="sidebar__hash">#</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Feed = () => {
  const posts = [
    {
      id: 1,
      name: 'Sangeetha',
      description: 'Farmer',
      message: 'Our paddy field is ready for harvest, If you need further details, please dm',
      image: 'photo8.png'
    },
    {
      id: 2,
      name: 'Senthil Kumar',
      description: 'Farmer',
      message: '“From a small seed, a mighty trunk may grow.”',
      image: 'photo5.png'
    },
    {
      id: 3,
      name: 'Siddharth',
      description: 'Trader',
      message: 'Cattle for sale at reasonable price follow for more updates',
      image: 'photo3.png'
    },
    {
      id: 4,
      name: 'Kiruthika',
      description: 'Agronomist',
      message: 'Need a suggestion from meteorologists kindly dm',
      image: 'photo2.png'
    },
    {
      id: 5,
      name: 'Suresh Kumar',
      description: 'Greengrocer',
      message: 'Freshly harvested vegetables and fruits for sale',
      image: 'photo4.png'
    },
    {
      id: 6,
      name: 'Mahalakshmi',
      description: 'Irrigation officer',
      message: 'Anyone need help about irrigation sector can contact me',
      image: 'Water irrigation1.jpg'
    },
    {
      id: 7,
      name: 'Saravanan',
      description: 'Farmer',
      message: 'Different kind of plants for sale',
      image: 'photo7.png'
    }
  ];

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" placeholder="Add Post" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {[
            { icon: InsertPhoto, color: '#70b5f9', text: 'Photo' },
            { icon: Subscriptions, color: '#e7a33e', text: 'Video' },
            { icon: EventNote, color: '#c0cbcd', text: 'Event' },
            { icon: CalendarViewDay, color: '#7fc15e', text: 'Write Article' }
          ].map((option) => (
            <div className="inputOption" key={option.text}>
              <option.icon style={{ color: option.color }} />
              <h4>{option.text}</h4>
            </div>
          ))}
        </div>
      </div>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post__header">
            <AccountCircle className="sidebar__topAvatar" />
            <div className="post__info">
              <h2>{post.name}</h2>
              <p>{post.description}</p>
            </div>
          </div>

          <div className="post__body">
            <p>{post.message}</p>
            <img src={post.image} alt="" />
          </div>

          <div className="feed__inputOptions">
            {[ThumbUp, Comment, Share, Send].map((IconComponent) => (
              <div className="inputOption" key={IconComponent.name}>
                <IconComponent style={{ color: 'gray' }} />
                <h4>{IconComponent.name.charAt(0).toUpperCase() + IconComponent.name.slice(1)}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Widgets = () => {
  const articles = [
    { title: 'Agriculture Funding Bill Delayed', readers: '15000' },
    { title: 'Advancements in AgTech', readers: '3500' },
    { title: 'Corn Crop Conditions', readers: '453' }
  ];

  return (
    <div className="home">
    <div className="widgets">
      <div className="widgets__header">
        <h2>Latest Update</h2>
        <Info />
      </div>
      {articles.map((article) => (
        <div className="widgets__article" key={article.title}>
          <div className="widgets__articleLeft">
            <FiberManualRecord />
          </div>
          <div className="widgets__articleRight">
            <h4>{article.title}</h4>
            <p>Top news - {article.readers} readers</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="body__main">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
*/


// import React from 'react';
// import './Home.css'; // Make sure to import the CSS file


// const Home = () => {
//   return (
//     <div className="body__main">
//       <div className="sidebar_h">
//         <div className="sidebar__top">
//           <img
//             src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
//             alt=""
//           />
//           <i className="material-icons sidebar__topAvatar">account_circle</i>
//           <h2>Shanmugasundaram</h2>
//           <h4>shanmu8050@gmail.com</h4>
//         </div>

//         <div className="sidebar__stats">
//           <div className="sidebar__stat">
//             <p>Who Viewed You</p>
//             <p className="sidebar__statNumber">2,453</p>
//           </div>
//           <div className="sidebar__stat">
//             <p>Views on post</p>
//             <p className="sidebar__statNumber">2,650</p>
//           </div>
//         </div>

//         <div className="sidebar__bottom">
//           <p>Recent</p>
//           {['Selling', 'Buying', 'Events', 'Trading', 'Funding'].map((item) => (
//             <div className="sidebar__recentItem" key={item}>
//               <span className="sidebar__hash">#</span>
//               <p>{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="feed">
//         <div className="feed__inputContainer">
//           <div className="feed__input">
//             <i className="material-icons">create</i>
//             <form>
//               <input type="text" placeholder="Add Post" />
//               <button type="submit">Send</button>
//             </form>
//           </div>

//           <div className="feed__inputOptions">
//             {[
//               { icon: 'insert_photo', color: '#70b5f9', text: 'Photo' },
//               { icon: 'subscriptions', color: '#e7a33e', text: 'Video' },
//               { icon: 'event_note', color: '#c0cbcd', text: 'Event' },
//               { icon: 'calendar_view_day', color: '#7fc15e', text: 'Write Article' }
//             ].map((option) => (
//               <div className="inputOption" key={option.text}>
//                 <i style={{ color: option.color }} className="material-icons">{option.icon}</i>
//                 <h4>{option.text}</h4>
//               </div>
//             ))}
//           </div>
//         </div>

//         {[
//           {
//             name: 'Sangeetha',
//             role: 'Farmer',
//             content: 'Our paddy field is ready for harvest, If you need further details, please dm',
//             image: '/images/photo8.png'
//           },
//           {
//             name: 'Senthil Kumar',
//             role: 'Farmer',
//             content: '“From a small seed, a mighty trunk may grow.”',
//             image: '/images/photo5.png'
//           },
//           {
//             name: 'Siddharth',
//             role: 'Trader',
//             content: 'Cattle for sale at reasonable price follow for more updates',
//             image: '/images/photo3.png'
//           },
//           {
//             name: 'Kiruthika',
//             role: 'Agronomists',
//             content: 'Need a suggestion from meteorologists kindly dm',
//             image: '/images/photo2.png'
//           },
//           {
//             name: 'Suresh Kumar',
//             role: 'Greengrocer',
//             content: 'Freshly harvested vegetables and fruits for sale',
//             image: '/images/photo4.png'
//           },
//           {
//             name: 'Mahalakshmi',
//             role: 'Irrigation officer',
//             content: 'Anyone need help about irrigation sector can contact me',
//             image: '/images/Water irrigation1.jpg'
//           },
//           {
//             name: 'Saravanan',
//             role: 'Farmer',
//             content: 'Different kind of plants for sale',
//             image: '/images/photo7.png'
//           }
//         ].map((post, index) => (
//           <div className="post" key={index}>
//             <div className="post__header">
//               <i className="material-icons sidebar__topAvatar">account_circle</i>
//               <div className="post__info">
//                 <h2>{post.name}</h2>
//                 <p>{post.role}</p>
//               </div>
//             </div>

//             <div className="post__body">
//               <p>{post.content}</p>
//               <img src={post.image} alt="" />
//             </div>

//             <div className="feed__inputOptions">
//               {[
//                 { icon: 'thumb_up', text: 'Like' },
//                 { icon: 'comment', text: 'Comment' },
//                 { icon: 'share', text: 'Share' },
//                 { icon: 'send', text: 'Send' }
//               ].map((option) => (
//                 <div className="inputOption" key={option.text}>
//                   <i style={{ color: 'gray' }} className="material-icons">{option.icon}</i>
//                   <h4>{option.text}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="widgets">
//         <div className="widgets__header">
//           <h2>Latest Update</h2>
//           <i className="material-icons">info</i>
//         </div>
//         {[
//           { title: 'Agriculture Funding Bill Delayed', readers: '15000' },
//           { title: 'Advancements in AgTech', readers: '3500' },
//           { title: 'Corn Crop Conditions', readers: '453' }
//         ].map((article, index) => (
//           <div className="widgets__article" key={index}>
//             <div className="widgets__articleLeft">
//               <i className="material-icons">fiber_manual_record</i>
//             </div>
//             <div className="widgets__articleRight">
//               <h4>{article.title}</h4>
//               <p>Top news - {article.readers} readers</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;





import React from 'react';
import './Home.css'; // Make sure this path is correct
import { IconContext } from "react-icons";
import { MdAccountCircle, MdCreate, MdInsertPhoto, MdSubscriptions, MdEventNote, MdCalendarViewDay, MdThumbUp, MdComment, MdShare, MdSend, MdInfo, MdFiberManualRecord } from 'react-icons/md';

function Home() {
  return (
    <IconContext.Provider value={{ className: "material-icons" }}>
      <div className="body__main">
        
        <div className="sidebar">
          <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
            <MdAccountCircle className="sidebar__topAvatar" />
            <h2>Shanmugasundaram</h2>
            <h4>shanmu8050@gmail.com</h4>
          </div>

          <div className="sidebar__stats">
            <div className="sidebar__stat">
              <p>Who Viewed You</p>
              <p className="sidebar__statNumber">2,453</p>
            </div>
            <div className="sidebar__stat">
              <p>Views on post</p>
              <p className="sidebar__statNumber">2,650</p>
            </div>
          </div>

          <div className="sidebar__bottom">
            <p>Recent</p>
            {['Selling', 'Buying', 'Events', 'Trading', 'Funding'].map(item => (
              <div className="sidebar__recentItem" key={item}>
                <span className="sidebar__hash">#</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feed">
          <div className="feed__inputContainer">
            <div className="feed__input">
              <MdCreate />
              <form>
                <input type="text" placeholder="Add Post" />
                <button type="submit">Send</button>
              </form>
            </div>

            <div className="feed__inputOptions">
              {[
                { icon: <MdInsertPhoto style={{ color: '#70b5f9' }} />, text: 'Photo' },
                { icon: <MdSubscriptions style={{ color: '#e7a33e' }} />, text: 'Video' },
                { icon: <MdEventNote style={{ color: '#c0cbcd' }} />, text: 'Event' },
                { icon: <MdCalendarViewDay style={{ color: '#7fc15e' }} />, text: 'Write Article' }
              ].map(option => (
                <div className="inputOption" key={option.text}>
                  {option.icon}
                  <h4>{option.text}</h4>
                </div>
              ))}
            </div>
          </div>

          {[
            { name: 'Sangeetha', title: 'Farmer', content: 'Our paddy field is ready for harvest,  If you need further details, please dm', img: '/images/photo8.png' },
            { name: 'Senthil Kumar', title: 'Farmer', content: '“From a small seed, a mighty trunk may grow.”', img: '/images/photo5.png' },
            { name: 'Siddharth', title: 'trader', content: 'Cattle for sale at reasonable price follow for more updates', img: '/images/photo3.png' },
            { name: 'Kiruthika', title: 'agronomists', content: 'Need a suggestion from meteorologists kindly dm', img: '/images/photo2.png' },
            { name: 'Suresh Kumar', title: 'Greengrocer', content: 'Freshly harvested vegetables and fruits for sale', img: '/images/photo4.png' },
            { name: 'Mahalakshmi', title: 'Irrigation officer', content: 'Anyone need help about irrigation sector can contact me', img: '/images/Water irrigation1.jpg' },
            { name: 'Saravanan', title: 'Farmer', content: 'Different kind of plants for sale', img: '/images/photo7.png' }
          ].map(post => (
            <div className="post" key={post.name}>
              <div className="post__header">
                <MdAccountCircle className="sidebar__topAvatar" />
                <div className="post__info">
                  <h2>{post.name}</h2>
                  <p>{post.title}</p>
                </div>
              </div>
              <div className="post__body">
                <p>{post.content}</p>
                <img src={post.img} alt="" />
              </div>
              <div className="feed__inputOptions">
                {[
                  { icon: <MdThumbUp style={{ color: 'gray' }} />, text: 'Like' },
                  { icon: <MdComment style={{ color: 'gray' }} />, text: 'Comment' },
                  { icon: <MdShare style={{ color: 'gray' }} />, text: 'Share' },
                  { icon: <MdSend style={{ color: 'gray' }} />, text: 'Send' }
                ].map(option => (
                  <div className="inputOption" key={option.text}>
                    {option.icon}
                    <h4>{option.text}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="widgets">
          <div className="widgets__header">
            <h2>Latest Update</h2>
            <MdInfo />
          </div>
          {[
            { title: 'Agriculture Funding Bill Delayed', readers: '15000' },
            { title: 'Advancements in AgTech', readers: '3500' },
            { title: 'Corn Crop Conditions', readers: '453' }
          ].map(article => (
            <div className="widgets__article" key={article.title}>
              <div className="widgets__articleLeft">
                <MdFiberManualRecord />
              </div>
              <div className="widgets__articleRight">
                <h4>{article.title}</h4>
                <p>Top news - {article.readers} readers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Home;
