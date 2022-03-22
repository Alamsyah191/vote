<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        // $v = $request->validate([
        //     'email' => 'required',
        //     'email' => 'required',
        // ]);

        $v = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
            'rule' => 'required',
        ]);


        if ($v->fails()) {
            $response = [
                'status' => 'error',
                'msg' => 'validasi error',
                'errors' => $v->errors(),
                'content' => null,
            ];
            return response()->json($response, 200);
        } else {
            $c = request(['email', 'password']);

            if (!Auth::attempt($c)) {
                $res = [
                    'status' => 'error',
                    'msg' => 'gagal',
                    'errors' => null,
                    'content' => null,
                ];
                return response()->json($res, 401);
            };
            $user = User::where('email', $request->email)->first();
            if (!$user || !Hash::check(
                $request->password,
                $user->password
            )) {
                return response(['message' => 'Masalah saat login'], 401);
            } else {
                $tokennya = $user->createToken('token-auth')->plainTextToken;
                $res = [
                    'status' => 'success',
                    'msg' => 'Sukses',

                    'content' => [
                        'status_code' => 200,
                        'access_token' => $tokennya,
                        'token_type' => 'Bearer',
                    ],
                ];
                return response($res, 200);
            }
        }
    }
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response(['message' => 'Berhasil Keluar']);
    }
}
