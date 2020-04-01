const { ContentItem, DeliveryClient, TypeResolver } = require("@kentico/kontent-delivery");


  (async () => {
    class File extends ContentItem {
      constructor() {
        super({
          urlSlugResolver: (link, context) => {
            return {
              html: `<a href="${link.type}/${link.urlslug || link.codename}" download>${link.codename}</a>`
              // html: `<span><a href="${link.type}/${link.urlslug || link.codename}">${link.codename}</a></span>` // works
            }
          }
        });
      }
    }


    // Tip: Change the project ID of the API call to yours to display your own content. Make sure the codenames still match.
    const deliveryClient = new DeliveryClient({
      projectId: '4e9bdd7a-2db8-4c33-a13a-0c368ec2f108',
      typeResolvers: [
        new TypeResolver('file', () => new File()),
      ]
    });

    // Retrieves the content item from your project
    const result = await deliveryClient
      .item('download')
      .toPromise();

    console.log(result.item.text.resolveData().html);
  })();
