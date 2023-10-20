<?php

class Answer
{
    static $CODES = array(
        '101' => 'param method not setted',
        '102' => 'method not found',
        '242' => 'params not set fully ',
        '404' => 'not found',
        '555' => 'Is it Polygon?',
        '999' => 'Is it Triangle?',
        '1001' => 'params login or password not set',
        '1002' => 'error in auth user',
        '1003' => 'Is it unique login?',
        '1004' => '-',
        '9000' => 'unknown error'
    );

    static function response(array $data)
    {
        if ($data) {
            if (count($data) === 2 && !$data[0]) {
                $code = $data[1];
                return [
                    'result' => 'error',
                    'error' => [
                        'code' => $code,
                        'text' => self::$CODES[$code]
                    ]
                ];
            }
            return [
                'result' => 'ok',
                'data' => $data
            ];
        }
        $code = 9000;
        return [
            'result' => 'error',
            'error' => [
                'code' => $code,
                'text' => self::$CODES[$code]
            ]
        ];

    }

}