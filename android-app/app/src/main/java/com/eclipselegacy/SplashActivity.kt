package com.eclipselegacy

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setTheme(R.style.SplashTheme)
		Handler(Looper.getMainLooper()).postDelayed({
			startActivity(Intent(this, MainActivity::class.java))
			finish()
		}, 600)
	}
}