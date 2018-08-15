<?php 
namespace App\Http\Controllers; 

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller 
{ 
  public function index() // ユーザ一覧を返します
  { 
    $users = User::all();
    return $users;
  } 

  public function show($id) // ユーザIDをキーにユーザ情報詳細を返します
  { 
    $user = User::findOrFail($id); 
    return $user; 
  } 

  public function update(Request $request, $id) // ユーザIDをキーにユーザ情報を更新します
  { 
    $user = User::findOrFail($id);
    $user->update($request->all()); 
    return $user; 
  } 

  public function store(Request $request) // ユーザを追加します
  { 
    $user = new User; 
    $user->name = $request['name']; 
    $user->email = $request['email']; 
    $user->password = bcrypt($request['password']); 
    $user->save(); 
    return $user; 
  } 

  public function destroy($id) // ユーザIDをキーにユーザ情報を削除します
  { 
    $user = User::findOrFail($id); 
    $user->delete(); 
    return ''; 
  }

  public function authenticate(Request $request) // emailとpasswordでアクセストークンを取得して返します
  {
    $credentials = $request->only('email', 'password');
    try {
      if (! $token = JWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'invalid_credentials'], 401);
      }
    } catch (JWTException $e) {
      return response()->json(['error' => 'could_not_create_token'], 500);
    }
    $user = User::where('email', $request->email)->first();

    return response()->json(compact('user', 'token'));
  }

  public function getCurrentUser() // トークンに紐づくユーザ情報を取得して返します
  {
    $user = JWTAuth::parseToken()->authenticate();

    return response()->json(compact('user'));
  }

} 