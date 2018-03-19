export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
    //console.log(this);
  }

  domain(): string {
    try {
      const doaminAndPath: string = this.link.split('//')[1];
      return doaminAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
