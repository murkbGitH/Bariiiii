package work.syonet.bariiiii

import android.app.Activity
import android.content.pm.ActivityInfo
import android.os.Bundle

/**
 * バーコードを読み込む画面
 */
class BarcodeScanAndroidActivity : Activity() {

    /**
     * ライフサイクルメソッド
     * 画面遷移された時に呼び込まれるメソッド
     *
     * @param savedInstanceState
     * ${inheritDoc}
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 画面を固定
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        setContentView(R.layout.activity_barcode_scan_android)
    }
}
