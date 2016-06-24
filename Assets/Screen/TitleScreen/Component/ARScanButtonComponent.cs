﻿using UnityEngine;
using System;
using System.Collections;
using UnityEngine.SceneManagement;

using System.Threading;

public class ARScanButtonComponent : MonoBehaviour {

	/**
	 * インスタンス生成された時のみ実行されるメソッド
	 */
	void Awake () {

	}

	/**
	 * Awakeの後で
	 * 最初のフレームのアップデート前に実行されるメソッド
	 */
	void Start () {
	}

	/**
	 * フレーム毎に一度実行されるメソッド
	 */
	void Update () {
	}

	/**
	 * GUIイベントに応じて、フレームごとに複数回呼び出されるメソッド
	 */
	void OnGUI () {
	}

	/**
	 * ARScanボタンを押下した時の処理
	 */
	public void OnClickARScanButton () {
		SceneManager.LoadScene("Screen/ARScanScreen/ARScanScreenView");
	}
}