<?php

namespace App\Http\Controllers;

use App\Models\Calon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CalonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $c = Calon::all();
        return response($c, 200);
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
            'nama' => 'required',
            // 'foto' => 'required',
            'jurusan' => 'required',
        ]);
        $foto = $request->file('foto');
        if ($v->fails()) {
            $response = [
                'status' => 'error',
                'msg' => 'validasi error',
                'errors' => $v->errors(),
                'content' => null,
            ];
            return response()->json($response, 200);
        } else {
            if ($foto) {

                $name = $foto->getClientOriginalExtension();
                $sav =  Storage::putFile('/public/upload', $name);
                $oke =  Calon::create([
                    'nama' => $request->nama,
                    'jurusan' => $request->jurusan,
                    'foto' => $sav,
                ]);
                return response($oke, 200);
            } else {
                $oke =  Calon::create([
                    'nama' => $request->nama,
                    'jurusan' => $request->jurusan,

                ]);
                return response($oke, 200);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Calon  $calon
     * @return \Illuminate\Http\Response
     */
    public function show(Calon $calon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Calon  $calon
     * @return \Illuminate\Http\Response
     */
    public function edit(Calon $calon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Calon  $calon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Calon $calon)
    {

        $v = Validator::make($request->all(), [
            'nama' => 'required',
            'jurusan' => 'required',
        ]);
        $foto = $request->file('foto');

        if ($v->fails()) {
            $response = [
                'status' => 'error',
                'msg' => 'validasi error',
                'errors' => $v->errors(),
                'content' => null,
            ];
            return response()->json($response, 200);
        } else {
            if ($foto) {

                $name = $foto->getClientOriginalExtension();
                $sav =  Storage::putFile('/public/upload', $name);
                $oke =  $calon->update([
                    'nama' => $request->nama,
                    'jursan' => $request->jursan,
                    'foto' => $sav,
                ]);
                return response($oke, 200);
            } else {
                $oke =  $calon->update([
                    'nama' => $request->nama,
                    'jursan' => $request->jursan,

                ]);
                return response($oke, 200);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Calon  $calon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Calon $calon)
    {
        Storage::delete('upload/' . $calon->foto);
        $calon->delete();
        return response()->json("Berhasil");
    }
}
