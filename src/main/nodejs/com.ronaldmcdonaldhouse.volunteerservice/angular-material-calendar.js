calendar-md {
  display: block;
  max-height: 100%; }
  calendar-md .md-toolbar-tools h2 {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
  calendar-md .md-toolbar-tools .moveNext {
    transform: translate3d(0%, 0%, 0) rotate(180deg); }
  calendar-md md-content > md-content {
    border: 1px solid rgba(0, 0, 0, 0.12); }
    calendar-md md-content > md-content.agenda > * > * {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12); }
      calendar-md md-content > md-content.agenda > * > *.disabled {
        color: rgba(0, 0, 0, 0.3);
        pointer-events: none;
        cursor: auto; }
      calendar-md md-content > md-content.agenda > * > * :first-child {
        padding: 12px;
        width: 200px;
        text-align: right;
        color: rgba(0, 0, 0, 0.75);
        font-weight: 100;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }
      calendar-md md-content > md-content.agenda > * > * :not(:first-child) {
        overflow: hidden;
        text-overflow: ellipsis; }
    calendar-md md-content > md-content > * > * {
      min-width: 48px; }
    calendar-md md-content > md-content.calendar > :first-child {
      background: rgba(0, 0, 0, 0.02);
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      margin-right: 0;
      min-height: 36px; }
    calendar-md md-content > md-content.calendar > :not(:first-child) > * {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      border-right: 1px solid rgba(0, 0, 0, 0.12);
      cursor: pointer; }
      calendar-md md-content > md-content.calendar > :not(:first-child) > *:hover {
        background: rgba(0, 0, 0, 0.04); }
      calendar-md md-content > md-content.calendar > :not(:first-child) > *.disabled {
        color: rgba(0, 0, 0, 0.3);
        pointer-events: none;
        cursor: auto; }
      calendar-md md-content > md-content.calendar > :not(:first-child) > *.active {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
        background: rgba(0, 0, 0, 0.02); }
      calendar-md md-content > md-content.calendar > :not(:first-child) > * :first-child {
        padding: 0; }
      calendar-md md-content > md-content.calendar > :not(:first-child) > * :last-child {
        overflow: hidden;
        text-overflow: ellipsis; }