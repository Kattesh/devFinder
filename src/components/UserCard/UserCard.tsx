import styles from './UserCard.module.scss';
import {UserStat} from "../UserStat";
import {LocalGitHubUser} from "../../types/user";

interface UserCardProps extends LocalGitHubUser{ }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
   <UserStat
       repos={props.repos}
       followers={props.followers}
       following={props.following}/>
  </div>
);
