import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
    thumbnail: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
  },
  {
    original: "https://s.tmimgcdn.com/scr/800x500/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg",
    thumbnail: "https://s.tmimgcdn.com/scr/800x500/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg",
  },
  {
    original: "https://html.design/wp-content/uploads/2020/04/eflyer-600x800.jpg",
    thumbnail: "https://html.design/wp-content/uploads/2020/04/eflyer-600x800.jpg",
  },
  {
    original: "https://freshdesignweb.com/wp-content/uploads/Victoria-Fashion-Store-Free-HTML-Template-Website-700x465.jpg",
    thumbnail: "https://freshdesignweb.com/wp-content/uploads/Victoria-Fashion-Store-Free-HTML-Template-Website-700x465.jpg",
  },
  {
    original: "https://budibase.com/web-app-design/buffer.png",
    thumbnail: "https://budibase.com/web-app-design/buffer.png",
  },
  {
    original: "https://images.ctfassets.net/lh3zuq09vnm2/35iX0eqXszj59NXzLhz6a3/b52094c079ec81d8fb5bc5f7c5ec2b22/09_OneUI_template.jpg",
    thumbnail: "https://images.ctfassets.net/lh3zuq09vnm2/35iX0eqXszj59NXzLhz6a3/b52094c079ec81d8fb5bc5f7c5ec2b22/09_OneUI_template.jpg",
  }
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
