const ERROR_TITLE_CODE = {
  EMAIL_DUPLICATE_CHECK_FAILED: "メールの重複確認に失敗しました",
  PHONE_DUPLICATE_CHECK_FAILED: "電話番号の重複確認に失敗しました",
  USERID_DUPLICATE_CHECK_FAILED: "ユーザーIDの重複確認に失敗しました",
  GET_CONTACTS_FAILED: "連絡先の取得に失敗しました",
  USER_REGISTRATION_FAILED: "ユーザー登録に失敗しました",
  LOGIN_FAILED: "ログインに失敗しました",
  VERIFICATION_CODE_VERIFICATION_FAILED: "認証コードの確認に失敗しました",
  VERIFICATION_CODE_SEND_FAILED: "認証コードの送信に失敗しました",
  ADD_ACCOUNT_FAILED: "アカウントの追加に失敗しました。",
  VERIFY_PASSWORD_FAILED: "パスワード認証に失敗しました",
  PASSWORD_CHANGE_FAILED: "パスワードの変更に失敗しました",
} as const;

const ERROR_DESCRIPTION_CODE = {
  // validation error
  MISSING_EMAIL: "メールアドレスは必須です。メールアドレスを入力してください。",
  MISSING_PHONE: "電話番号は必須です。電話番号を入力してください。",
  MISSING_USERID: "ユーザーIDは必須です。ユーザーIDを入力してください。",
  MISSING_USER_IDENTIFIER:
    "メール、電話番号、ユーザーIDのうち、少なくとも1つが必要です。入力してください。",
  MISSING_LANGUAGE_SETTING: "言語設定は必須です。設定を入力してください。",
  MISSING_PASSWORD: "パスワードは必須です。パスワードを入力してください。",
  MISSING_NEW_PASSWORD:
    "新しいパスワードは必須です。新しいパスワードを入力してください。",
  MISSING_USERNAME: "ユーザー名は必須です。ユーザー名を入力してください。",
  MISSING_BIRTH: "生年月日は必須です。入力してください。",
  MISSING_NOTIFICATION_SETTINGS:
    "通知設定は必須です。通知設定を入力してください。",
  MISSING_DEVICE: "デバイス情報は必須です。入力してください。",
  MISSING_LOCATION: "住所情報は必須です。入力してください。",
  MISSING_IP: "IPアドレスは必須です。入力してください。",
  MISSING_DEVICE_IP_LOCATION: "デバイス、IP、位置情報が必要です。",
  MISSING_VERIFICATION_CODE:
    "認証コードは必須です。認証コードを入力してください。",

  // verification failed
  VERIFICATION_CODE_MISMATCH: "認証コードが一致しません。",

  // authentication failed
  PASSWORD_UNMATCHED: "パスワードが一致しません。",
  VERIFICATION_CODE_EXPIRED:
    "認証コードの有効期限が切れました。新しいコードを取得して再試行してください。",
  PASSWORD_UNCHANGED: "パスワード変更がありません",

  // session error
  SESSION_CREATION_FAILED: "アクティブなセッションの作成に失敗しました。",

  // save failed
  LOGIN_FAILURE_UNSAVED: "ログイン失敗記録の保存に失敗しました。",
  LOGIN_RECORD_SAVE_FAILED: "ログイン記録の保存に失敗しました。",
  FAILED_TO_CREATE_VERIFICATION_CODE: "認証コードの作成に失敗しました。",

  // update failed
  LOCK_PROCESS_FAILED: "アカウントロック処理中にエラーが発生しました。",

  // delete failed
  PARTIAL_DELETION_FAILED: "一部のログイン失敗記録が削除されませんでした。",
  FAILED_TO_DELETE_VERIFICATION_CODE: "認証コードの削除に失敗しました。",

  // account lock
  TOO_MANY_LOGIN_FAILURES: "ログイン失敗回数が上限を超えました。",
  BRUTE_FORCE_DETECTED:
    "ブルートフォース攻撃が検出されました。アカウントがロックされました。管理者に連絡してください。",

  // not found
  USER_NOT_FOUND: "該当するユーザーが見つかりません。",
  EMAIL_INFO_NOT_FOUND: "メールが見つかりません。",
  PHONE_INFO_NOT_FOUND: "電話番号が見つかりません。",
  CONTACT_INFO_NOT_FOUND: "連絡先情報が見つかりません。",

  ACCOUNT_ALREADY_EXISTS: "このアカウントは既に存在します。",

  // unknown error
  UNKNOWN_ERROR: "不明なエラーが発生しました",
};

const ERRORS = { ERROR_DESCRIPTION_CODE, ERROR_TITLE_CODE };

export default ERRORS;
