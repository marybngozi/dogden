export default {
  mounted: (el) => {
    const loadImage = () => {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      );

      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    };

    const createObserver = () => {
      const options = {
        // circumstances under which the observer's callback is invoked
        root: null, // defaults to the browser viewport if not specified or if null
        threshold: "0.7", // the degree of intersection between the target element and its root (0 - 1)
        // threshold of 1.0 means that when 100% of the target is visible within
        //the element specified by the root option, the callback is invoked
        rootMargin: "0px 0px 50px 0px",
      };

      // Whether you're using the viewport or some other element as the root,the API works the same way,
      // executing a callback function you provide whenever the visibility of the target element changes
      // so that it crosses desired amounts of intersection with the root

      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(el); // target element to watch
    };

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      createObserver();
    }
  },
};
