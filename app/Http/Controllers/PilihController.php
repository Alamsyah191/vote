<?php

namespace App\Http\Controllers;

use App\Models\Pilih;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PilihController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $v = Validator::make($request->all(), [
            'user_id' => 'required',
            'calon_id' => 'required',
            'vote' => 'required',
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
            $s = Pilih::create([
                'user_id' => $request->user_id,
                'calon_id' => $request->calon_id,
                'vote' => $request->vote,
            ]);

            return response()->json($s, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pilih  $pilih
     * @return \Illuminate\Http\Response
     */
    public function show(Pilih $pilih)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pilih  $pilih
     * @return \Illuminate\Http\Response
     */
    public function edit(Pilih $pilih)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pilih  $pilih
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pilih $pilih)
    {
        $v = Validator::make($request->all(), [
            'user_id' => 'required',
            'calon_id' => 'required',
            'vote' => 'required',
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
            $s = $pilih->update([
                'user_id' => $request->user_id,
                'calon_id' => $request->calon_id,
                'vote' => $request->vote,
            ]);

            return response()->json($s, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pilih  $pilih
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pilih $pilih)
    {
        $pilih->delete();
        return response()->json("berhsil");
    }
}
