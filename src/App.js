import { AppShell, MantineProvider, createStyles } from "@mantine/core";
import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import ShopPage from "./pages/shopPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailsPage from "./pages/productDetailsPage";
import {CartPage} from "./pages/cartPage";
import { MyComponent } from "./pages/cartPage2.style";

export const AppShellCss = createStyles(() => ({
  appShell: {
    ["&  main"]: {
      minHeight: "unset",
      backgroundColor: "#F0F5F0",
    },
  },
}));
function App() {
  const {
    classes: { appShell },
  } = AppShellCss();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: "30em",
          sm: "48em",
          md: "64em",
          lg: "74em",
          xl: "90em",
        },
      }}
    >
      <Router>
      <AppShell className={appShell} padding={0} header={<NavBar />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/test" element={<MyComponent />} />
        </Routes>
      </AppShell>
      </Router>
      <Footer />
    </MantineProvider>
  );
}

export default App;

window.cssToObject = cssToObject;

function cssToObject(str) {
  function convertCssStringToObject(cssString) {
    // Parse CSS string into key-value pairs
    const cssPairs = cssString.split(";").map((pair) => pair.trim());

    // Convert CSS pairs to valid JavaScript property names
    const jsPairs = cssPairs.map((pair) => {
      const [cssProperty, cssValue] = pair
        .split(":")
        .map((item) => item.trim());
      const jsProperty = cssProperty.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );

      // Convert value to number if it's a valid number
      const jsValue = /^\d+(\.\d+)?$/.test(cssValue)
        ? Number(cssValue)
        : cssValue;

      return [jsProperty, jsValue];
    });

    // Convert JavaScript pairs into an object
    const jsObject = Object.fromEntries(jsPairs);

    return jsObject;
  }
  const cssObj = str
    .split("{")[1]
    .split("}")[0]
    .split(";")
    .map((el) => {
      return convertCssStringToObject(el);
    })
    .reduce((acc, props) => {
      acc = { ...acc, ...props };
      return acc;
    });
  return JSON.stringify(cssObj);
}

// window.addEventListener('resize', function() {
//   var elements = document.getElementsByTagName('*'); // Get all elements in the document

//   for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     var scrollWidth = element.scrollWidth;
//     var clientWidth = element.clientWidth;

//     if (scrollWidth > clientWidth) {
//       console.log('Element with scroll bar:', element);
//       // You can perform additional actions on the element here
//     }
//   }
// });

window.addEventListener("resize", function () {
  var elements = document.getElementsByTagName("*"); // Get all elements in the document

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var scrollWidth = element.scrollWidth;
    var clientWidth = element.clientWidth;

    if (scrollWidth > clientWidth) {
      var childElements = element.getElementsByTagName("*"); // Get all child elements

      for (var j = 0; j < childElements.length; j++) {
        var childElement = childElements[j];
        var childScrollWidth = childElement.scrollWidth;
        var childClientWidth = childElement.clientWidth;

        if (childScrollWidth > childClientWidth) {
          console.log("Parent Element:", element);
          console.log("Child Element:", childElement);
          // You can perform additional actions on the child element here
        }
      }
    }
  }
});
