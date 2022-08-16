class DataService {
  getDocument() {
    var document = [
        {
          name: 'Gerrit',
          url: 'test1',
        },
        {
          name: 'GitLab',
          url: 'test2',
        },
        {
          name: 'Jira',
          url: 'test3',
        },
        {
          name: 'Confluence',
          url: 'test4',
        },
        {
          name: 'JFrog',
          url: 'test4',
        },
        {
          name: 'AWS',
          url: 'test5',
        },
      ]
    return document;
  }

  getAnnouncement() {
    var announcement = [
        {
          title: 'Item #1',
          value: 1,
          props: {
            prependIcon: 'mdi-home',
          },
        },
        {
          title: 'Item #2',
          value: 2,
          props: {
            appendIcon: 'mdi-close',
          },
        },
        {
          title: 'Item #3',
          value: 3,
          props: {
            color: 'primary',
          },
        },
      ]
    return announcement;
  }
}

export default new DataService();
