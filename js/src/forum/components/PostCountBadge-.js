import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import PostUser from "flarum/components/PostUser";
import Tooltip from 'flarum/common/components/Tooltip';

export default class PostCountBadge extends Component {
  view() {
    const userPosts = this.attrs.posts;
    const userClass = this.attrs.userClass;
    const userBadgeLabel = this.attrs.label;

    const post = this.attrs.post;
    const userPosts_c = post.user()?.commentCount(); //'5';//
    //const tierEight = app.forum.attribute('justoverclock-auto-post-badge-pro.iconEight') || 'fas fa-user-tag' + ' autopost';
    const lowerBound = app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tier.from');
    const upperBound = app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tier.to');
    const complColor = '#d7ffcc';//app.forum.attribute('justoverclock-auto-post-badge-pro.bgColor') || '#d7ffcc';
    const backgrTwo = '#ffffff';//app.forum.attribute('justoverclock-auto-post-badge-pro.bgColorTwo') || '#ffffff';
    const perc = (userPosts_c - lowerBound) / (upperBound - lowerBound) * 100;
    // let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`
    let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`
    return (
      <span>
        <Tooltip
          text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten', {
            count: userPosts,
          })}
        >
          <span className="auto-badge" style={bgPerc}>
            <i class={userClass + ' autopost'} />
            {userBadgeLabel}
          </span>
        </Tooltip>
      </span>
    );
  }
}
