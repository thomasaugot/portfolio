import { useInView } from "react-intersection-observer";
import HeaderBlogContent from "../../../../components/HeaderBlog/HeaderBlogContent";
import "../Content_Articles.scss";
import { useEffect, useState } from "react";
import FooterArticles from "../../../../components/Footer/FooterArticles";

const Content_PublishNewVersionAppStore = () => {
  const [setIsVisible] = useState(false);
  const { inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView, setIsVisible]);

  return (
    <div className="article-content Content">
      <HeaderBlogContent />
      <h1 className="gradient-text">
        Releasing a new version of a React Native mobile app on the Apple App Store
      </h1>
      <img src={require("./assets/apple.jpg")} alt="screen with code" className="intro-img" />
      <p className="intro">
        Deploying a new version of a React Native mobile app on the Apple App Store involves several
        crucial steps to ensure a successful update. Here's a detailed guide to help you navigate
        through this process successfully using both VSCode and Xcode.
      </p>
      <h2 className="gradient-text">1. Emulate the app via XCode to ensure everything works</h2>
      <p className="paragraph">
        Before beginning the update process, make sure to test the app by emulating it through
        XCode. This ensures that everything is functioning correctly in the new version.
      </p>
      <h2 className="gradient-text">2. Modify the version in the info.plist file</h2>
      <p className="paragraph">
        In VSCode, navigate to the "ios" folder and locate the info.plist file. Modify the version
        by incrementing it (e.g., from 1.3 to 1.4). Ensure to also update the "MARKETING_VERSION"
        variable in the project.pbxproj file to match the new version. Don't forget to save the
        files.
      </p>
      <h2 className="gradient-text">3. Clean and build the app in XCode</h2>
      <p className="paragraph">
        In XCode, go to the "Product" tab and select "Clean Build Folder". Then, build the app by
        choosing "Build" from the same menu.
      </p>
      <h2 className="gradient-text">4. Archive the app in XCode</h2>
      <p className="paragraph">
        Select "Archive" from the "Product" tab after building the app. Once the process will be
        finished, a window will automatically open with several prompts: just validate everything
        without touching anything. If you encounter a "Copy failed" error, check the available disk
        space. The bundle is being sent automatically to the Apple Developer account which is
        registered for your app in the XCode.
      </p>
      <h2 className="gradient-text">5. Set up the new version in the Apple Developer account</h2>
      <p className="paragraph">
        Access your Apple Developer account, then in the "Versions" tab, create a new version.
        Select the build you previously generated and uploaded via XCode.
      </p>
      <h2 className="gradient-text">6. Manage TestFlight settings</h2>
      <p className="paragraph">
        If the build is not immediately visible, navigate to the "TestFlight" tab. Wait a few
        minutes (sometimes more) for the build to become available. Resolve any compliance issues if
        needed.
      </p>
      <h2 className="gradient-text">7. Finalize the release on the App Store</h2>
      <p className="paragraph">
        Return to the "App Store" tab and add the bundle associated with the version. Click "Save",
        then "Add for Review". Submit the version for review and approval by the Apple team.
      </p>
      <p className="conclusion">
        By following these steps precisely, you can successfully deploy a new version of your React
        Native application on the Apple App Store. Make sure to adhere to Apple's standards and
        guidelines to ensure a seamless update of your app. Good luck with your deployment process!
      </p>
      <h6>By Thomas Augot, September 2023</h6>
      <FooterArticles />
      <br />
      <br />
    </div>
  );
};

export default Content_PublishNewVersionAppStore;
