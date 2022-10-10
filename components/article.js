import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Date from '../components/date';
import { prefix } from '../utils/prefix.js'

export default function Article({type, date, index=null, title, snippet, id=null, isEven=null, content=null, image=null}) {
  return (
    <article className={ classNames("Article", type, isEven) } style={{ backgroundImage: type === "-hero" ? `url(${prefix + image})` : type === "-single_post" ? `url(${prefix + image})` : "none"}}>
      <div className="article_wrapper">
        <Date dateString={date} />
        <h2 className={ classNames({ 'heading_large' : index === 0  }) }>
          <div className="layered_background" aria-hidden="true"></div>
          { image ? 
            <span className="image-container">
              <Image 
                src={prefix + image}
                layout='fill'
                objectFit='cover'
              />
            </span>
          : "" }
          <span>{title}</span>
        </h2>
        { snippet ? <p>{snippet}</p> : "" }
        { content ? <div className="content_wrapper" dangerouslySetInnerHTML={{ __html: content }} /> : "" }
        { type != "-single_post" ? <Link href={`/posts/${id}`}><a>...Continue Reading »</a></Link> : "" }
      </div>
    </article>
  );
}