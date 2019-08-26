module Update exposing (update)

import Message exposing (..)
import Model exposing (..)

---- Update.elm <-> reducer.ts ----


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )

