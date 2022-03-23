<?php

namespace App\Http\Controllers;

use App\Events\PilihEvent;
use App\Models\Pilih;
use Illuminate\Http\Request;

class DepanController extends Controller
{
    public function index()
    {
        $nama = Pilih::with('user', 'calon')->get();
        $c = Pilih::with('user', 'calon')->count();

        $respon = [
            'hitung' => $c,
            'nama' => $nama,
        ];

        return response($respon, 200);
    }

    public function ds()
    {
        $nama = Pilih::with('user', 'calon')->get();
        $c = Pilih::with('user', 'calon')->count();

        $respon = [
            'hitung' => $c,
            'nama' => $nama,
        ];

        return view('welcome', $respon);
    }
}
