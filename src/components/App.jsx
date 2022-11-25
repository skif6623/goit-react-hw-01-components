import user from 'user';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <GlobalStyle />
    </div>
  );
};
