<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pilih extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'calon_id', 'vote'];


    /**
     * Get the user that owns the Pilih
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function calon(): BelongsTo
    {
        return $this->belongsTo(Calon::class);
    }
}
