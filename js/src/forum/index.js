import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/forum/components/PostUser';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
//import PostCountBadge from './components/PostCountBadge';
import Tooltip from "flarum/common/components/Tooltip";

app.initializers.add('litalino/flarum-auto-post-count-badge', () => {
  User.prototype.autoCountBadge = Model.attribute('autoCountBadge');
  User.prototype.autoCountBadgeLabel = Model.attribute('autoCountBadgeLabel');

  extend(PostUser.prototype, 'view', function (vnode) {
    const checkRoute = app.current.get('routeName');

    if (checkRoute === 'discussion' || checkRoute === 'discussion.near' || checkRoute === 'blogArticle') {
      const post = this.attrs.post;
      const user = post.user();

      // If we don't have a user, do nothing
      if (!user) {
        return;
      }

      //const userPosts = post.user().commentCount();
      const userPosts = post.user()?.commentCount();
      const userClass = post.user().autoCountBadge();
      const userBadgeLabel = post.user().autoCountBadgeLabel();
      //console.log(userBadgeLabel);

      // We don't have a class or label, so do nothing
      if (userClass === "" || userBadgeLabel === "") {
        return;
      }

      //const post = this.attrs.post;
      //const userPosts = post.user()?.commentCount();
      const complColor = app.forum.attribute('justoverclock-auto-post-count-badge.bgColor') || '#d7ffcc';
      const backgrTwo = app.forum.attribute('justoverclock-auto-post-count-badge.bgColorTwo') || '#ffffff';

      if (!post.isHidden()) {
        //console.log("userPosts: " + userPosts);
        //console.log(app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tier.from'));
        //console.log(app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tier.to'));

        const One_min = "0";
        const One_max = "9";
        if (userPosts >= One_min && userPosts <= One_max) {
          /*
          const tierOne =  app.forum.attribute('justoverclock-auto-post-badge.levelOne') || 'fas fa-baby' + ' autopost';
          const lowerBound = app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tierOne.from');
          const upperBound = app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tierOne.to');
          //const nextBadge = userPosts - upperBound +1;
          //const resNextBadge = Math.abs(nextBadge);
          const perc = (userPosts - lowerBound) / (upperBound - lowerBound) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`
          //let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          */
          console.log("userPosts: " + userPosts);
          //const One =  app.forum.attribute('justoverclock-auto-post-badge-pro.iconOne') || 'fas fa-baby' + ' autopost';
          const One =
            app.forum.attribute(
              "justoverclock-auto-post-count-badge.levelOne"
            ) || "fas fa-baby" + " autopost";
          //const lowerBound = app.forum.attribute('justoverclock-auto-post-badge-pro.fromOne');
          //const upperBound = app.forum.attribute('justoverclock-auto-post-badge-pro.toOne');
          const lowerBound = One_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tierOne.from');
          const upperBound = One_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tierOne.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          //<i class={userClass + ' autopost'} /> {userBadgeLabel}
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={One} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeOne"
                  ) || "The Baby"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Two_min = "10";
        const Two_max = "49";
        if (userPosts >= Two_min && userPosts <= Two_max) {
          console.log("userPosts: " + userPosts);
          //const Two =  app.forum.attribute('justoverclock-auto-post-badge-pro.iconTow') || 'fas fa-child' + ' autopost';
          const Two =
            app.forum.attribute("justoverclock-auto-post-badge.levelTow") ||
            "fas fa-child" + " autopost";
          //const lowerBound = app.forum.attribute('justoverclock-auto-post-badge-pro.fromOne');
          //const upperBound = app.forum.attribute('justoverclock-auto-post-badge-pro.toOne');
          const lowerBound = Two_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tierOne.from');
          //console.log("lowerBound: " + lowerBound);
          const upperBound = Two_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.tierOne.to');
          //console.log("upperBound: " + upperBound);
          const nextBadge = userPosts - upperBound + 1;
          //console.log("nextBadge: " + nextBadge);
          const resNextBadge = Math.abs(nextBadge);
          //console.log("resNextBadge: " + resNextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          //console.log("perc: " + perc);
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          //console.log("bgPerc: " + bgPerc);
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Two} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeTow"
                  ) || "The Newbie"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Tree_min = "50";
        const Tree_max = "99";
        if (userPosts >= Tree_min && userPosts <= Tree_max) {
          console.log("userPosts: " + userPosts);
          const Tree =
            app.forum.attribute("justoverclock-auto-post-badge.levelTree") ||
            "fas fa-bullhorn" + " autopost";
          const lowerBound = Tree_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Tree_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Tree} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeTree"
                  ) || "The Talker"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Four_min = "100";
        const Four_max = "299";
        if (userPosts >= Four_min && userPosts <= Four_max) {
          console.log("userPosts: " + userPosts);
          const Four =
            app.forum.attribute("justoverclock-auto-post-badge.levelFour") ||
            "fas fa-chalkboard-teacher" + " autopost";
          const lowerBound = Four_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Four_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Four} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeFour"
                  ) || "The Teacher"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Five_min = "300";
        const Five_max = "599";
        if (userPosts >= Five_min && userPosts <= Five_max) {
          console.log("userPosts: " + userPosts);
          const Four =
            app.forum.attribute("justoverclock-auto-post-badge.levelFive") ||
            "fas fa-monster" + " autopost";
          const lowerBound = Five_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Five_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Five} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeFive"
                  ) || "The Monster"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Six_min = "600";
        const Six_max = "999";
        if (userPosts >= Six_min && userPosts <= Six_max) {
          console.log("userPosts: " + userPosts);
          const Six =
            app.forum.attribute("justoverclock-auto-post-badge.levelSix") ||
            "fas fa-graduation-cap" + " autopost";
          const lowerBound = Six_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Six_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Six} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeSix"
                  ) || "The Guru!"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Seven_min = "1000";
        const Seven_max = "1999";
        if (userPosts >= Seven_min && userPosts <= Seven_max) {
          console.log("userPosts: " + userPosts);
          const Seven =
            app.forum.attribute("justoverclock-auto-post-badge.levelSeven") ||
            "fas fa-medal" + " autopost";
          const lowerBound = Seven_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Seven_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Seven} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeSeven"
                  ) || "The Flarumist!"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Eight_min = "2000";
        const Eight_max = "3999";
        if (userPosts >= Eight_min && userPosts <= Eight_max) {
          console.log("userPosts: " + userPosts);
          const Eight =
            app.forum.attribute("justoverclock-auto-post-badge.levelEight") ||
            "fas fa-stethoscope" + " autopost";
          const lowerBound = Eight_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Eight_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Eight} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeEight"
                  ) || "The Expert!"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Nine_min = "4000";
        const Nine_max = "7999";
        if (userPosts >= Nine_min && userPosts <= Nine_max) {
          console.log("userPosts: " + userPosts);
          const Nine =
            app.forum.attribute("justoverclock-auto-post-badge.levelNine") ||
            "fas fa-bible" + " autopost";
          const lowerBound = Nine_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Nine_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Nine} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeNine"
                  ) || "The God*"}
                </span>
              </Tooltip>
            </span>
          );
        }

        const Ten_min = "8000";
        const Ten_max = "9999";
        if (userPosts >= Ten_min && userPosts <= Ten_max) {
          console.log("userPosts: " + userPosts);
          const Ten =
            app.forum.attribute("justoverclock-auto-post-badge.levelTen") ||
            "fas fa-user-shield" + " autopost";
          const lowerBound = Ten_min; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.from');
          const upperBound = Ten_max; //app.forum.attribute('justoverclock-auto-post-count-badge.admin.settings.One.to');
          const nextBadge = userPosts - upperBound + 1;
          const resNextBadge = Math.abs(nextBadge);
          const perc =
            ((userPosts - lowerBound) / (upperBound - lowerBound)) * 100;
          let bgPerc = `background: -webkit-linear-gradient(left, ${complColor} ${perc}%,${backgrTwo} ${perc}%) !important;`;
          vnode.children.push(
            <span>
              <Tooltip
                text={
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.nextBadge"
                  ) +
                  " " +
                  resNextBadge +
                  " " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.posts"
                  ) +
                  " :: " +
                  app.translator.trans(
                    "justoverclock-auto-post-count-badge.forum.hasWritten",
                    {
                      count: userPosts,
                    }
                  )
                }
              >
                <span className="auto-badge" style={bgPerc}>
                  <i class={Ten} />
                  {app.forum.attribute(
                    "justoverclock-auto-post-count-badge.badgeTen"
                  ) || "*The Untouchable*"}
                </span>
              </Tooltip>
            </span>
          );
        }

        /*vnode.children.push(
          <PostCountBadge
            posts={userPosts}
            userClass={userClass}
            label={userBadgeLabel}
          />
        );*/
        /*vnode.children.push(
          <span>
            <Tooltip
              //text={
              //    app.translator.trans('justoverclock-auto-post-badge-pro.forum.nextBadge') + ' ' + resNextBadge + ' ' +
              //    app.translator.trans('justoverclock-auto-post-badge-pro.forum.posts')}
              text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten', {
                count: userPosts,
              })}
            >
              <span className="auto-badge" style={bgPerc}>
                <i class={userClass + ' autopost'} />
                {userBadgeLabel}
                <i class={tierOne} />
                {app.forum.attribute('justoverclock-auto-post-badge.badgeOne') || 'The Baby'}
              </span>
            </Tooltip>
          </span>
        );*/
      }
    }
  });
});