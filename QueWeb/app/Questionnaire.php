<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Questionnaire extends Model
{
    //
    protected $table = "questionnaire";
    protected $primaryKey = "id";
    public $timestamps = false;
}
