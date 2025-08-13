plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    namespace = "com.eclipselegacy"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.eclipselegacy"
        minSdk = 16
        targetSdk = 34
        versionCode = 1
        versionName = "0.1.0"

        buildConfigField("String", "SERVER_URL", '"http://localhost:4000"')

        vectorDrawables.useSupportLibrary = true
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
        debug {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
}