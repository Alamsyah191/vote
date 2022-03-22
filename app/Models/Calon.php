<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Calon extends Model
{
    use HasFactory;


    protected $fillable = ['nama', 'jurusan', 'foto', 'visi', 'misi'];

    public function pilih()
    {
        return $this->hasMany(Pilih::class);
    }
}
