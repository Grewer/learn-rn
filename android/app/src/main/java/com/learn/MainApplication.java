package com.learn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.ReactSextant.wps.WPSOfficePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.rnfs.RNFSPackage;
import com.reactlibrary.RNReactNativeDocViewerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new WPSOfficePackage(),
            new RNCWebViewPackage(),
            new RNFileViewerPackage(),
            new RNGestureHandlerPackage(),
            new RNFSPackage(),
            new RNReactNativeDocViewerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
